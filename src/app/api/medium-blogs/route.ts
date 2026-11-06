import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser();

export const revalidate = 600; // new Substack posts show within ~10 minutes

export async function GET() {
  try {
    const mediumFeed = "https://jordantromero.substack.com/feed"; // The Empathic Engineer (posts moved from Medium)
    // Substack's CDN serves a stale /feed for a while after publishing; a unique
    // query string skips that cache so new posts appear on the next refresh.
    const feed = await parser.parseURL(`${mediumFeed}?t=${Date.now()}`);

    const blogs = feed.items.filter((item) => item.title !== "Coming soon").map((item) => {
      const imageMatch = item.content?.match(/<img.*?src="(.*?)"/);
      const imageUrl = imageMatch ? imageMatch[1] : null;
    
      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        contentSnippet: item.contentSnippet,
        imageUrl,
      };
    });

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching Substack posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts from Substack." },
      { status: 500 }
    );
  }
}
