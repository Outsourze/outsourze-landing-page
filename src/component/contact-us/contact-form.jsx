import Form from "./form";

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
                  <Form />
                </div>
            </div>
        </div>
    )
}

export default ContactFormSection;