import React from 'react';
import { useNavigate } from 'react-router-dom';

function DemoButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/bookingform')}
      className="bg-white text-[#064469] px-6 py-2 rounded-md shadow hover:bg-gray-100 transition duration-300"
    >
      Book Demo
    </button>
  );
}

export default DemoButton;
