export default async function handler(req, res) {
  return res.status(200).send({
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
