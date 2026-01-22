import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(200).json({ message: "API is working" });
  }

  const { message } = req.body || {};

  return res.status(200).json({
    reply: `mycarAi received: ${message}`,
  });
}
