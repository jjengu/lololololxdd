// /pages/api/ip.js
export default function handler(req, res) {
  // Try to get the IP from headers first (behind proxies)
  const ip = 
    req.headers['x-forwarded-for'] || // standard header for real IP
    req.connection.remoteAddress || 
    req.socket.remoteAddress ||
    null;

  res.status(200).json({ ip });
}
