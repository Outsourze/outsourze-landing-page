import { useState } from "react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMsg("Message sent successfully!");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setErrorMsg(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to send. Please try again later.");
    } finally {
      setLoading(false);

      // Clear messages after 5 seconds
      setTimeout(() => {
        setSuccessMsg("");
        setErrorMsg("");
      }, 5000);
    }
  };

  return (
    <div className="max-w-7xl m-auto">
      <div className="flex justify-between items-start gap-10">
        <div className="w-[32%] flex-col flex gap-5 py-5">
          <h2 className="font-heading text-5xl font-extrabold">
            Let’s Talk About How We Can Help Your Business Grow
          </h2>
          <hr />
          <p>
            Whether you're ready to outsource your first role or just want to explore your options, we're here to help.
            Fill out the form below or reach out directly—we’ll get back to you within 1 business day.
          </p>
        </div>
        <div className="w-3/5 brand-bg-offwhite py-12 px-7 rounded-3xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Success Message */}
            {successMsg && (
              <div className="brand-text-orange font-semibold italic text-xl">{successMsg}</div>
            )}
            {/* Error Message */}
            {errorMsg && (
              <div className="text-red-600 font-semibold">{errorMsg}</div>
            )}

            {/* Form Fields */}
            <div className="flex flex-col gap-4">
              <label htmlFor="first-name" className="font-medium">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                id="first-name"
                name="name"
                type="text"
                required
                className="w-full border-0 border-b-1 border-black bg-transparent focus:outline-none focus:border-orange-500 placeholder-gray-400"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <label htmlFor="email" className="font-medium">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border-0 border-b-1 border-black bg-transparent focus:outline-none focus:border-orange-500 placeholder-gray-400"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="company" className="font-medium">
                  Company{" "}
                  <span className="italic text-sm text-gray-500">
                    (Optional)
                  </span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full border-0 border-b-1 border-black bg-transparent focus:outline-none focus:border-orange-500 placeholder-gray-400"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="message" className="font-medium">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full border-0 border-b-1 border-black bg-transparent focus:outline-none focus:border-orange-500 placeholder-gray-400"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <p className="text-sm font-bold">
              Fields marked with an asterisk (<span className="text-red-600">*</span>) are required.
            </p>

            <button
              type="submit"
              disabled={loading}
              className={`mt-4 w-full md:w-fit px-6 py-3 ${
                loading
                  ? "cursor-not-allowed bg-orange-600"
                  : "bg-black hover:bg-orange-500 hover:text-white"
              } brand-text-orange text-white rounded-full duration-300 relative`}
            >
              <span
                className={`transition-opacity duration-200 ${
                  loading ? "opacity-0" : "opacity-100"
                }`}
              >
                Send Us a Message
              </span>
              <span
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${
                  loading ? "opacity-100" : "opacity-0"
                }`}
              >
                Sending...
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
