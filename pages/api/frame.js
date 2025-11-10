export default function handler(req, res) {
  res.status(200).json({
    type: 'frame',
    frame: {
      version: "vNext",
      image: "https://ticket-trade-app.vercel.app/api/image", 
      buttons: [
        { label: "BUY 🚀", action: "post" },
        { label: "SELL 📉", action: "post" }
      ],
      postUrl: "https://ticket-trade-app.vercel.app/api/frame"
    }
  });
}
