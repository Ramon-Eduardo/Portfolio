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

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.PASS,
            },
        });

        console.log("Attempting to send email from:", process.env.EMAIL_FROM);
        
        const info = await transporter.sendMail(message);
        console.log("Email sent successfully:", info.response);
        
        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error: any) {
        const errorMessage = error?.message || "Unknown error";
        const errorCode = error?.code || "UNKNOWN";
        
        console.error("Error sending email:", {
            message: errorMessage,
            code: errorCode,
            response: error?.response,
        });
        
        // Return more specific error message for debugging
        let userMessage = "Failed to send email";
        
        if (errorCode === "EAUTH") {
            userMessage = "Authentication failed - check your email and app password";
        } else if (errorMessage.includes("Invalid login")) {
            userMessage = "Invalid email or app password";
        } else if (errorMessage.includes("SMTP")) {
            userMessage = "Email service error - please try again later";
        }
        
        return NextResponse.json({ message: userMessage }, { status: 500 });
    }
}
