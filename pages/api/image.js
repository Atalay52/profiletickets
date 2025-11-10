export default function handler(req, res) {
  const svg = `&lt;svg width="600" height="400" xmlns="http://www.w3.org/2000/svg"&gt;
    &lt;rect width="600" height="400" fill="#4F46E5"/&gt;
    &lt;text x="300" y="200" font-family="Arial" font-size="24" fill="white" text-anchor="middle"&gt;
      Ticket Trade - Test
    &lt;/text&gt;
  &lt;/svg&gt;`;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
}
