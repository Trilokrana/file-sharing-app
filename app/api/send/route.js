import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "./../../_components/email-template"; 

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const response = await req.json();
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ranatrilok1234@gmail.com",
      subject: `${response?.userName} Hi, we have shared a file with you!`, 
      react: EmailTemplate({ response }),
    
    });

    return NextResponse.json({ data }); 
  } catch (error) {
    console.error("Error encountered:", error);
    return NextResponse.json({
      error: "An error occurred while sending the email",
    });
  }
}
