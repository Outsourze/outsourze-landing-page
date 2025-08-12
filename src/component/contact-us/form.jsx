const Form = ({
    
}) => {
    return (
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
    )
}

export default Form;