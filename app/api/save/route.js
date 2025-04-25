import dbConnect from "../../lib/dbConnect";
import schema from "../../models/QrSchema";

export async function POST(req) {
  try {
    const { Name, Email, URL, Image } = await req.json();

    console.log("Received data: ", Name, Email, URL, "Image data received");

    if (!Name || !Email || !URL || !Image) {
      console.log("Insufficient data");
      return new Response(JSON.stringify({ message: "Invalid data" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    await dbConnect();

    const newQR = new schema({
      Name,
      Email,
      URL,
      Image, // This will now store the actual base64 image data
    });

    await newQR.save();
    console.log("New QR saved");

    return new Response(JSON.stringify({ message: "QR Saved" }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Error saving new QR: " + error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
