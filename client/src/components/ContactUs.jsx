const ContactUs = () => {
  return (
    <section
      id="contact"
      className="bg-[#FBF6E9] text-[#003229] py-16 px-6 md:px-12 border border-green-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get in <span className="text-[#FBBF24]">Touch</span> With Us
        </h2>
        {/* Contact Info and Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
              <p>
                <a className="text-[#FBBF24] hover:text-[#F59E0B] transition">
                  9223453450
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
              <p>
                <a
                  href="mailto:contact@epconr.com"
                  className="text-[#FBBF24] hover:text-[#F59E0B] transition"
                >
                  info@termitrack.com
                </a>
              </p>
            </div>
          </div>
          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#FBBF24]"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 block w-full px-4 py-2 rounded-md bg-[#014739] text-white focus:ring-[#FBBF24] focus:ring-2"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#FBBF24]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 block w-full px-4 py-2 rounded-md bg-[#014739] text-white focus:ring-[#FBBF24] focus:ring-2"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#FBBF24]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-2 block w-full px-4 py-2 rounded-md bg-[#014739] text-white focus:ring-[#FBBF24] focus:ring-2"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FBBF24] text-[#003229] py-2 px-4 rounded-md font-semibold shadow-md hover:bg-[#F59E0B] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
