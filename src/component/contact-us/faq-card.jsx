import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion"; // ✅ Correct import

const FaqCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(prev => !prev);

  return (
    <div 
        className="w-[49%] cursor-pointer brand-bg-orange rounded-2xl overflow-hidden h-fit"
        onClick={handleClick}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between p-5 transition-all duration-300 ${
          isOpen ? "rounded-t-2xl" : "rounded-2xl"
        }`}
      >
        <h3 className="font-bold text-xl text-white">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-full bg-black p-[1.5px]"
        >
          <MdKeyboardArrowDown color="#ffffff" size={20} />
        </motion.div>
      </div>

      {/* Animated Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="bg-white px-5 py-4 text-black text-sm font-normal rounded-b-2xl">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqCard;
