export default async function handler(req, res) {
  // Get the visitor's IP
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0] || 
    req.socket?.remoteAddress || 
    'Unknown IP';

  // Log to Vercel console
  console.log('Visitor IP:', ip);

  // Send response
  res.status(200).send(`Your IP: ${ip}`);
}
