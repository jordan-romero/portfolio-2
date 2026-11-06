import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser();

export const revalidate = 3600;

export async function GET() {
  try {
    const mediumFeed = "https://jordantromero.substack.com/feed"; // The Empathic Engineer (posts moved from Medium)
    const feed = await parser.parseURL(mediumFeed);

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
