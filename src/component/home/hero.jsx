// hero section

import Button from "../ui/button";


const HeroSection = () => {
    return (
        <div className="brand-bg-offwhite">
            <div className="max-w-7xl py-8 m-auto flex items-center">
               <div className="flex flex-col gap-5 items-start">
                    <h1 className="text-7xl font-extrabold font-heading text-shadow-heading mb-5">Outsource <br /> Smarter.<br /> Grow Faster.</h1>
                    <div className="flex flex-col gap-5">
                        <p className="font-bold">At OUTSOURZE, we help businesses scale through high-quality, cost-effective staffing solutions based in the Philippines.</p>
                        <p className="font-bold">
                          Flexible. Affordable. Results-driven.<br />
                          Serving the Globe to offer tailored outsourcing solutions.
                        </p>
                    </div>
                    <Button text={"Continue"}/>
               </div>
               <div>

               </div>
            </div>
        </div>
    )
}

export default HeroSection;



