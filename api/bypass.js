export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "No url provided" });
  }

  try {
    const response = await fetch(
      `https://bypassapi.vercel.app/api/Bypass?url=${encodeURIComponent(url)}`
    );

    const data = await response.json();

    return res.status(200).json({
      result: data.result || url
    });

  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch from bypassapi" });
  }
}
