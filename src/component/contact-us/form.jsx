import { useState } from "react";

const Form = () => {
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

      console.log({data});
      

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

      // Auto-clear messages after 5 seconds
      setTimeout(() => {
        setSuccessMsg("");
        setErrorMsg("");
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Success Message */}
      {successMsg && (
        <div className="brand-text-orange font-semibold italic text-xl">{successMsg}</div>
      )}

      {/* Error Message */}
      {errorMsg && <div className="text-red-600 font-semibold">{errorMsg}</div>}

      {/* Name */}
      <div className="flex flex-col gap-4">
        <label htmlFor="name" className="font-medium">
          First Name <span className="text-red-600">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border-0 border-b border-black bg-transparent focus:outline-none focus:border-orange-500 placeholder-gray-400"
        />
      </div>

      {/* Email & Company */}
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
            value={formData.email}
            onChange={handleChange}
            className="w-full border-0 border-b border-black bg-transparent focus:outline-none focus:border-orange-500 placeholder-gray-400"
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="company" className="font-medium">
            Company{" "}
            <span className="italic text-sm text-gray-500">(Optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="w-full border-0 border-b border-black bg-transparent focus:outline-none focus:border-orange-500 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-4">
        <label htmlFor="message" className="font-medium">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full border-0 border-b border-black bg-transparent focus:outline-none focus:border-orange-500 placeholder-gray-400"
        />
      </div>

      <p className="text-sm font-bold">
        Fields marked with an asterisk (<span className="text-red-600">*</span>) are required.
      </p>

      {/* Submit Button */}
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
  );
};

export default Form;
