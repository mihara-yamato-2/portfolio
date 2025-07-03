import React, { useState } from "react";
import { sendEmail, openMailClient } from "../src/utils/emailService";
import { useLocale } from "../src/locale";

const Contact: React.FC = () => {
  const { t } = useLocale();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(t("contact_sending"));

    try {
      // EmailJSを使用してメール送信を試行
      const result = await sendEmail({
        from_name: name,
        from_email: email,
        message: message,
        subject: "fromPortfolio",
      });

      if (result.success) {
        setStatus(t("contact_success"));
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // EmailJSが失敗した場合はmailtoにフォールバック
        console.warn("EmailJS failed, falling back to mailto:", result.error);
        openMailClient(name, email, message);
        setStatus(t("contact_fallback"));
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Email sending error:", error);
      // エラーの場合もmailtoにフォールバック
      openMailClient(name, email, message);
      setStatus(t("contact_fallback"));
      setName("");
      setEmail("");
      setMessage("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-neutral-dark">
            {t("contact_title")}
          </h1>
          <p className="mt-2 text-lg text-neutral-medium">
            {t("contact_description")}
          </p>
        </div>
        <div className="bg-white p-8 border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-black mb-2"
              >
                {t("contact_name")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white"
                placeholder="山田太郎"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-black mb-2"
              >
                {t("contact_email")} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white"
                placeholder="example@email.com"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-black mb-2"
              >
                {t("contact_message")} <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-vertical bg-white"
                placeholder="お問い合わせの内容をご記入ください..."
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting || !name || !email || !message}
                className="group relative inline-block text-blue-600 font-medium border-2 border-blue-600 px-8 py-3 overflow-hidden transition-all duration-300 w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100"
              >
                <span className="absolute inset-0 bg-blue-600 transform origin-bottom-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-disabled:scale-x-0"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600 group-hover:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      {t("contact_sending")}
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {t("contact_send")}
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>

          {status && (
            <div
              className={`mt-6 p-4 border-l-4 ${
                status === t("contact_success")
                  ? "bg-green-50 border-green-400 text-green-700"
                  : status === t("contact_fallback")
                  ? "bg-blue-50 border-blue-400 text-blue-700"
                  : "bg-red-50 border-red-400 text-red-700"
              }`}
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  {status === t("contact_success") ? (
                    <svg
                      className="h-5 w-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : status === t("contact_fallback") ? (
                    <svg
                      className="h-5 w-5 text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 text-red-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">{status}</p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t("contact_direct")}
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:mihayama1005@gmail.com"
                  className="inline-flex items-center justify-center px-4 py-2 text-blue-600 border border-blue-600 hover:bg-blue-50 transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {t("contact_email_direct")}
                </a>
                <a
                  href="https://github.com/HAYAMA1005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("contact_github")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
