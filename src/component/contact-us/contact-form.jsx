

const ContactFormSection = () => {
    return (
        <div className="max-w-7xl m-auto
        xl:px-0
        lg:px-20
        md:px-20
        max-md:px-5">
            <div className="flex justify-between items-start gap-10
            lg:flex-row
            md:flex-col
            max-md:flex-col">
                <div className="flex-col flex gap-5 py-5
                lg:w-[32%] 
                md:w-full
                max-md:w-full">
                    <h2 className="font-heading  font-extrabold
                    xl:text-5xl lg:text-4xl md:text-4xl max-md:text-2xl max-md:text-center"> Let’s Talk About How We Can Help Your Business Grow</h2>
                    <hr />
                    <p className="max-md:text-sm max-md:text-center">Whether you're ready to outsource your first role or just want to explore your options, we're here to help. Fill out the form below or reach out directly—we’ll get back to you within 1 business day.</p>
                </div>
                <div className="brand-bg-offwhite rounded-3xl
                lg:w-3/5 lg:py-12 lg:px-7 
                md:w-full md:py-6 md:px-4
                max-md:w-full max-md:py-6 max-md:px-4">
                    <form className="flex flex-col gap-6" method="POST" action="#">
                      <div className="flex flex-col gap-4">
                        <label htmlFor="first-name" className="font-medium">
                          First Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="first-name"
                          name="firstName"
                          type="text"
                          required
                          className="w-full border-0 border-b-1 border-black bg-transparent focus:outline-none focus:border-orange-500 placeholder-gray-400"
                          placeholder=""
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
                            placeholder=""
                          />
                        </div>                  

                        <div className="flex flex-col gap-4">
                          <label htmlFor="company" className="font-medium">
                            Company <span className="italic text-sm text-gray-500">(Optional)</span>
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            className="w-full border-0 border-b-1 border-black bg-transparent focus:outline-none focus:border-orange-500 placeholder-gray-400"
                            placeholder=""
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
                          placeholder=""
                        />
                      </div>                    

                      <p className="text-sm font-bold">
                        Fields marked with an asterisk (<span className="text-red-600">*</span>) are required.
                      </p>                  

                      <button
                        type="submit"
                        className="mt-4 w-full md:w-fit px-6 py-3 bg-black brand-text-orange text-white rounded-full duration-300 cursor-pointer
                        hover:bg-orange-600 hover:text-white"
                      >
                        Send Us a Message
                      </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactFormSection;