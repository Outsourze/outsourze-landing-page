import Button from "@/component/ui/button";

const SpecificSectionHeader = () => {
    return (
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-4xl">What's Included</h2>
        <Button 
          url={"/services"}
          text={"View All Services"}
        />
      </div>
    )
}

export default SpecificSectionHeader;