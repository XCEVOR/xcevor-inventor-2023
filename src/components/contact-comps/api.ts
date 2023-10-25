import { senderDataType } from "@/types/types-cantact";

type dataType = {
  userEmailAddress: string,
  userTitle: string,
  userContent: string,
}



export const sendContactForm = async (data:senderDataType) => {
  const nodeMailerUrl = process.env.ENV_NODEMAILER_URL;

  // fetch("/api/contact", {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: { "Content-Type": "application/json", Accept: "application/json" },
  // }).then((res) => {
  //   if (!res.ok) throw new Error("Failed to send message");
  //   return res.json();
  // });
  // console.log({data})

  fetch((nodeMailerUrl + "/api/user/mail") || "http://localhost:5000/api/user/mail", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });
}