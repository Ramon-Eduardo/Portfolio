import { NextResponse } from "next/server";

const nodemailer = require("nodemailer")

export async function POST(request: Request) {
    
    try {
        const body = await request.json();

        if (!body.name || !body.email || !body.subject || !body.message) {
            return NextResponse.json(
                { message: "Missing required fields" }, 
                { status: 400 }
            );
        }

        // Validate environment variables
        if (!process.env.EMAIL_FROM || !process.env.PASS) {
            console.error("Missing email environment variables");
            return NextResponse.json(
                { message: "Server configuration error" }, 
                { status: 500 }
            );
        }

    const message = {
        from: `${process.env.EMAIL_FROM}`,
        to: `${process.env.EMAIL_FROM}`,
        replyTo: body.email,
        subject: `New Contact Form Submission: ${body.subject}`,
        html: `
        <h2>New Contact Form Submission</h2>
        
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Subject:</strong> ${body.subject}</p>
        
        <h3>Message:</h3>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
        `,

        headers: {
            "X-Entity-Ref-ID": "contact-form",
        },
        
    };

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    console.log(JSON.stringify(body))

    try {
        await transporter.sendMail(message);
        return NextResponse.json({ message: "Email sent successfully"}, { status: 200 });
    } catch (error: any) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }
}