import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface INotificationMessage {
  message: string;
}

const NotificationMessage = ({ message }: INotificationMessage) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (message) {
      setIsOpen(true);
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return isOpen ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed max-w-[270px] uppercase font-bold text-center text-[16px] w-full bottom-10 right-10 text-green-500 bg-green-950 p-4 shadow-buttonGreenBrick"
    >
      {message}
    </motion.div>
  ) : null;
};

export default NotificationMessage;
