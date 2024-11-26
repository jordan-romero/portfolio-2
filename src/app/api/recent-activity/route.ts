import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME; 
    const resiliaOrg = "resiliatech"; 

    // Fetch events for the user
    const eventsResponse = await axios.get(
      `https://api.github.com/users/${username}/events`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    // Filter events for valid types and ensure user matches
    const validEventTypes = ["PushEvent", "PullRequestEvent", "IssueCommentEvent"];
    const filteredEvents = eventsResponse.data.filter((event: any) => {
      return (
        validEventTypes.includes(event.type) &&
        event.actor?.login === username 
      );
    });

    // Process events for minimal or detailed display
    const recentActivity = filteredEvents.map((event: any) => {
      const isResiliaRepo = event.repo.name.toLowerCase().includes(resiliaOrg);
      if (isResiliaRepo) {
        return {
          id: event.id,
          type: event.type,
          repo: event.repo.name,
          created_at: event.created_at,
        }; 
      }

      return {
        id: event.id,
        type: event.type,
        repo: event.repo.name,
        created_at: event.created_at,
        payload: event.payload, // Full details for non-Resilia events
      };
    });

    return NextResponse.json(recentActivity);
  } catch (error: any) {
    console.error("Error fetching recent activity:", error.response?.data || error);
    return NextResponse.json(
      { error: "Failed to fetch recent activity" },
      { status: 500 }
    );
  }
}
