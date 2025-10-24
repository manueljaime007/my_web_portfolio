import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/351900000000', '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl hover:scale-110 transition-transform z-50"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};
