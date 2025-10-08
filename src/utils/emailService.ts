import emailjs from "@emailjs/browser";

// EmailJSサービスの初期化
const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  }
};

// メール送信関数
export const sendEmail = async (templateParams: {
  from_name: string;
  from_email: string;
  message: string;
  subject?: string;
}) => {
  try {
    // 初期化
    initEmailJS();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      throw new Error("EmailJS configuration is missing");
    }

    // メール送信
    const response = await emailjs.send(serviceId, templateId, {
      ...templateParams,
      to_email: "mihayama1005@gmail.com",
      subject: templateParams.subject || "fromPortfolio",
    });

    console.log("Email sent successfully:", response);
    return { success: true, response };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error };
  }
};

// フォールバック用のmailto関数
export const openMailClient = (
  name: string,
  email: string,
  message: string
) => {
  const emailBody = `お名前: ${name}%0D%0Aメールアドレス: ${email}%0D%0A%0D%0Aメッセージ:%0D%0A${encodeURIComponent(
    message
  )}`;
  const mailtoLink = `mailto:mihayama1005@gmail.com?subject=fromPortfolio&body=${emailBody}`;
  window.open(mailtoLink, "_blank");
};
