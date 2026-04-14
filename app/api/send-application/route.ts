import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, message, resumeFileName } = body;

        // Create transporter using SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Create email content
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: 'career@aloitconsultants.com',
            subject: `Internship Application - ${name}`,
            replyTo: email,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #241A24;">New Internship Application</h2>
                    <hr style="border: 1px solid #e0e0e0; margin: 20px 0;">
                    
                    <div style="margin-bottom: 20px;">
                        <h3 style="color: #60a5fa; margin-bottom: 10px;">Applicant Information</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                    </div>

                    ${message ? `
                    <div style="margin-bottom: 20px;">
                        <h3 style="color: #60a5fa; margin-bottom: 10px;">Cover Letter / Message</h3>
                        <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
                    </div>
                    ` : ''}

                    <div style="margin-top: 30px; padding: 15px; background-color: #f5f5f5; border-radius: 8px;">
                        <p style="margin: 0; color: #666; font-size: 14px;">
                            <strong>Note:</strong> ${resumeFileName ? `Applicant mentioned CV file: ${resumeFileName}. Please check attachments or ask applicant to send separately.` : 'No CV file was uploaded.'}
                        </p>
                    </div>

                    <hr style="border: 1px solid #e0e0e0; margin: 20px 0;">
                    <p style="color: #999; font-size: 12px;">This application was submitted through the ALO IT Consultants career page.</p>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: 'Application sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to send application' },
            { status: 500 }
        );
    }
}
