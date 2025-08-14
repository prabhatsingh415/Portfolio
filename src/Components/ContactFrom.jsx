import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const formRef = useRef(null);
  const [popup, setPopup] = useState({
    show: false,
    success: true,
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setPopup({
          show: true,
          success: true,
          message: "Email sent successfully! I will reply soon. Thanks!",
        });
        formRef.current.reset();
      })
      .catch(() => {
        setPopup({
          show: true,
          success: false,
          message: "Oops! Something went wrong. Please try again later.",
        });
      });
  };

  const closePopup = () =>
    setPopup({ show: false, success: true, message: "" });

  return (
    <div className="relative w-full font-sansations max-w-lg mx-auto p-6 sm:p-4 border-2 border-zinc-900 rounded-xl bg-zinc-950">
      <h2 className="font-googleSans text-2xl sm:text-xl font-bold mb-6 text-center">
        Send Me a Message
      </h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-3 sm:p-2 rounded border border-zinc-700 bg-zinc-900 text-white text-sm sm:text-base"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-3 sm:p-2 rounded border border-zinc-700 bg-zinc-900 text-white text-sm sm:text-base"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="w-full p-3 sm:p-2 rounded border border-zinc-700 bg-zinc-900 text-white text-sm sm:text-base resize-none"
        />
        <button
          type="submit"
          className="w-full bg-gray-300 hover:bg-gray-200 text-black p-3 sm:p-2 rounded text-sm sm:text-base transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg hover:z-10 hover:shadow-zinc-700"
        >
          Send
        </button>
      </form>

      {popup.show && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
          onClick={closePopup}
        >
          <div
            className="bg-zinc-950 p-6 sm:p-4 rounded-xl text-center max-w-md w-full"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside popup
          >
            <h3
              className={`text-lg font-bold mb-2 ${
                popup.success ? "text-green-400" : "text-red-400"
              }`}
            >
              {popup.success ? "Success!" : "Error!"}
            </h3>
            <p className="text-white text-sm sm:text-base">{popup.message}</p>
            <button
              onClick={closePopup}
              className="mt-4 w-full bg-gray-300 hover:bg-gray-200 text-black  px-4 py-2 rounded text-sm sm:text-base transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg hover:z-10 hover:shadow-zinc-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
