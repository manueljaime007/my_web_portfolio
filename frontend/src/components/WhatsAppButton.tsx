import { FaWhatsapp } from 'react-icons/fa6';

import { Button } from './ui/button';

export const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/244950366621', '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size="icon"
      className="fixed bottom-20 right-10 h-14 w-14 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 z-50"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6" />
    </Button>
  );
};
