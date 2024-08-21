import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Fade, Zoom } from 'react-reveal';

const Login = ({ isOpen, onClose, children }) => {
  const loginRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-slate-900/50 items-center justify-center z-1000">
     <Zoom out delay={100}>
      <div className='flex items-center justify-center h-screen w-screen'>
      <div className="bg-amber-600/90 p-3 rounded shadow-lg w-25 max-w-100%" ref={loginRef}>
        {children}
      </div>
      </div>
      </Zoom>
    </div>,
    document.body
  );
};

export default Login;
