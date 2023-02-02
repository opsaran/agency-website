import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //check id the request method is POST
  if (req.method !== "POST") {
    return res.status(400).json({ error: "invalid method" });
  }
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.GRAPHCMS_SECRET_REVALIDATE) {
    return res.status(401).json({ message: "Invalid token" });
  }
  //check if body is not empty
  const body = req.body;
  if (!body) {
    return res.status(400).json({ message: "bad request (No body)" });
  }
  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"

    const slugToRevalidate = body.data.slug;
    console.log("slugtorealidate: ", slugToRevalidate);
    await res.revalidate("/blog");
    await res.revalidate(`/blog/${slugToRevalidate}`);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
