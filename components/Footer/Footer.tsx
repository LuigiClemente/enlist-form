'use client';
import React, { useEffect, useState, useRef } from "react";
import { useTranslations } from "use-intl";
import { twMerge } from 'tailwind-merge';

const Footer: React.FC<{footerBg : string}> = ({footerBg}) => {
  const t = useTranslations('Index');
  const [isButtonHovered, setButtonHovered] = useState(false);
  const emailInputRef = useRef<any>(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const inputElement = emailInputRef.current;

    const timer = setTimeout(() => {
      if (inputElement && document.activeElement === inputElement) {
        inputElement.blur();
      }
    }, 2000); // Set the timeout to 2 seconds

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      // Automatically blur the input if it is not visible in the viewport
      if (!entry.isIntersecting && document.activeElement === inputElement) {
        inputElement.blur();
      }
    }, {
      threshold: 1 // Trigger if less than 10% of the input is visible
    });

    if (inputElement) {
      observer.observe(inputElement);
    }

    return () => {
      clearTimeout(timer);
      if (inputElement) {
        observer.unobserve(inputElement);
      }
    };
  }, [email]);

  const autofillStyles = `
    footer input:-webkit-autofill,
    footer input:-webkit-autofill:hover, 
    footer input:-webkit-autofill:focus, 
    footer input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px ${isButtonHovered ? '#f6b9ae' : '#f8e433'} inset !important;
    }
  `;

  return (
    <footer
      id="footer"
      className="w-full relative overflow-hidden pb-10 bg-no-repeat bg-cover grid place-items-center"
    >
      <div className="max-w-[700px]">
        <h1 className="font-bold text-[#05403a] text-5xl md:text-7xl text-center mb-10">
          {t('footer_heading')}
        </h1>
        <span className="text-3xl text-[#05403a]">
          {t('footer_description')}
        </span>

        <form className="mx-auto mt-10 flex max-w-1xl gap-x-4">
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            ref={emailInputRef}
            className={twMerge(`placeholder-[#453f0a] min-w-0 flex-auto rounded-xl border-0 px-3.5 py-3 text-[#453f0a] shadow-sm ring-white/10 ring-2 ring-inset text-[20px] sm:leading-6 bg-[#f8e433] ${isButtonHovered ? 'bg-[#f6b9ae] text-[#45312e] buttonHovered' : ''}`)}
            placeholder={t('email_placeholder')}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="btn-primary secondary"
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
          >
            {t('button_text')}
          </button>
        </form>
      </div>
      <style>
        {autofillStyles}
      </style>
    </footer>
  );
};

export default Footer;
