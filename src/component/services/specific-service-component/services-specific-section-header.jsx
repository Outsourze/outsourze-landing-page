import Button from "@/component/ui/button";

const SpecificSectionHeader = () => {
    return (
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-4xl">What's Included</h2>
        <Button 
          url={"/services"}
          text={"View All Services"}
          style={"hover:bg-black hover:text-orange-500"}
        />
      </div>
    )
}

export default SpecificSectionHeader;