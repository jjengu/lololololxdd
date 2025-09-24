export default function handler(req, res) {
  const ip =
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    null;

  res.status(200).json({ ip });
}
