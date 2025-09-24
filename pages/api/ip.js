export default function handler(req, res) {
  const ip =
    req.headers['x-forwarded-for'] ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    'Unknown IP';

  console.log('Requester IP:', ip); // prints in Vercel logs

  res.status(200).send('IP logged to console.');
}
