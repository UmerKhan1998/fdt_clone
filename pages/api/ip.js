// pages/api/get-ip.js
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req, res) {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  res.status(200).json({ ip });
}
