import { motion } from "framer-motion";
import ContainerWrapper from "../components/ContainerWrapper";
import { Linkedin, Twitter, Mail } from "iconoir-react";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();

  // ================= EMAILJS =================
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "",   // ← sender id
        "",  // ← template id
        formRef.current,
        ""    // ← public key
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        alert("Failed to send. Try again.");
      });
  };

 return (
  <ContainerWrapper>
    <div className="min-h-screen text-white pt-24 sm:pt-28 md:pt-32 pb-16 mt-[-100px] sm:pb-20">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* ================= FORM ================= */}
        <motion.div
          className="bg-[#1d1d1d] p-6 sm:p-8 md:p-10 rounded-2xl border border-[#252525] text-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10">
            Let’s Work <span className="text-gray-400">Together</span>
          </h2>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-5 sm:space-y-6"
          >
            <motion.input
              name="name"
              type="text"
              placeholder="Name"
              required
              className="w-full h-12 sm:h-14 bg-[#262626] border border-[#333] rounded-xl px-4 sm:px-5 outline-none text-sm sm:text-base"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full h-12 sm:h-14 bg-[#262626] border border-[#333] rounded-xl px-4 sm:px-5 outline-none text-sm sm:text-base"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.input
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full h-12 sm:h-14 bg-[#262626] border border-[#333] rounded-xl px-4 sm:px-5 outline-none text-sm sm:text-base"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.textarea
              name="message"
              rows={5}
              placeholder="Message"
              required
              className="w-full bg-[#262626] border border-[#333] rounded-xl p-4 sm:p-5 outline-none text-sm sm:text-base"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.button
              type="submit"
              className="w-full h-12 sm:h-14 bg-[#323232] hover:bg-[#3d3d3d] rounded-xl text-base sm:text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* ================= SOCIAL LINKS ================= */}
        <motion.div
          className="text-center space-y-5 sm:space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="uppercase text-gray-400 tracking-widest text-xs sm:text-sm">
            Social Links
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">

            {/* Email */}
            <a
              href="mailto:connectwith@drankithjain.com"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1d1d1d] flex items-center justify-center hover:bg-gray-700 transition"
            >
              <Mail width={20} height={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1d1d1d] flex items-center justify-center hover:bg-[#0A66C2] transition"
            >
              <Linkedin width={20} height={20} />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1d1d1d] flex items-center justify-center hover:bg-[#1DA1F2] transition"
            >
              <Twitter width={20} height={20} />
            </a>

            {/* Medium */}
            <a
              href="https://medium.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1d1d1d] flex items-center justify-center hover:bg-[#a3a7c5] transition"
            >
              <img
                src="/images/medium.png"
                alt="Medium"
                className="w-5 h-5 sm:w-6 sm:h-6 invert"
              />
            </a>

          </div>
        </motion.div>

      </div>
    </div>
  </ContainerWrapper>
);;
}
