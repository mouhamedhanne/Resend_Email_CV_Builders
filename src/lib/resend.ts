import Invitation from "@/emails/Invitation";
import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

const email = async () => {
  await resend.emails.send({
    from: "buildercvapp@gmail.com",
    to: ["delivered@resend.dev"],
    subject: "hello world",
    react: Invitation({
      magicLink: "https://resend.dev",
    }),
    attachments: [
      {
        filename: "invoice.pdf",
        content: invoiceBuffer,
      },
    ],
    headers: {
      "X-Entity-Ref-ID": "123456789",
    },
    tags: [
      {
        name: "category",
        value: "confirm_email",
      },
    ],
  });
};
