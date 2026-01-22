import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(200).json({ message: "API is working" });
  }

  return res.status(200).json({
    reply: "Hello from mycarAi backend",
  });
}
