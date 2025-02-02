import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, subject, name, message } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "noreply@albanledinh.com",
      to: [process.env.MY_EMAIL || ""],
      subject: subject,
      react: await EmailTemplate({ name, email, message, subject }),
    });

    if (error) {
      console.log("error", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
