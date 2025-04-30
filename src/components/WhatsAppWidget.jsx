import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppWidget = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href="https://wa.me/916006773643" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default WhatsAppWidget;
