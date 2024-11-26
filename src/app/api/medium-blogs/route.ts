import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser();

export async function GET() {
  try {
    const mediumFeed = "https://medium.com/feed/@jordan-t-romero"; 
    const feed = await parser.parseURL(mediumFeed);

    const blogs = feed.items.map((item) => {
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
    console.error("Error fetching Medium blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs from Medium." },
      { status: 500 }
    );
  }
}
