import React from 'react';
import ProfileImg from '../assets/prabhu.png';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Card = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:prabhudeveloper03@gmail.com";
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='card-container bg-white mt-8 py-8 shadow-2xl rounded-xl md:w-3/5 sm:w-4/5 w-11/12 animate-fadeIn'>
        <div className='text-center text-3xl text-purple-500 mb-4 font-semibold'>
          Welcome To My Profile
        </div>
        <div className="flex justify-center">
          <div className="profile-image-container w-40 h-40 border border-purple-400 rounded-full overflow-hidden flex items-center justify-center">
            <img className="w-full h-full object-cover" src={ProfileImg} alt="Profile"/>
          </div>
        </div>
        <div className='text-2xl text-center mt-6 font-semibold'>Prabhu K</div>
        <div className='text-center text-xl text-gray-600 mb-4'>MERN-STACK Develop<span className='text-red-600'>er</span></div>
        <div className='text-center text-xl text-red-600 mb-2 font-semibold'>About Me</div>
        <p className='text-left mt-2 ml-5 mr-5 mb-6 text-gray-800'>As a MERN stack developer, I use MongoDB, Express.js, React.js, and Node.js to build strong web applications. I handle both front-end and back-end technologies to create user-friendly interfaces and scalable server logic.</p>
        <button onClick={handleContactClick} className='rounded-md text-lg text-white bg-purple-600 py-2 w-32 block mx-auto mb-4 hover:bg-purple-700 focus:outline-none focus:bg-purple-700 transition duration-300 ease-in-out'>Contact</button>
        <div className='social-media flex justify-center'>
          <a href="https://github.com/Prabhuoffi" target="_blank" rel="noopener noreferrer" className="mr-4 text-purple-500 hover:text-purple-900">
            <FaGithub size={24} />
          </a>
          <a href="https://www.instagram.com/prabhugk03/" target="_blank" rel="noopener noreferrer" className="mr-4 text-purple-500 hover:text-purple-900">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/prabhu-k-0b3a55254/" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-900">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
