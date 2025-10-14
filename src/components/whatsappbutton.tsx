import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "9392476382"; // Your WhatsApp number with country code
  const message = encodeURIComponent("Hello! I want to know more about your courses.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all animate-pulse"
      style={{ zIndex: 9999 }}
    >
      <img
        src="/whatsapp-icon.svg" // Add WhatsApp SVG in public folder
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
};

export default WhatsAppButton;
