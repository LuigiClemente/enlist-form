import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Switch from "../Switch/switch";
import { useTranslations } from "next-intl";

// Make sure to set the app element for accessibility reasons
Modal.setAppElement("body");

const CookiesModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const t =useTranslations('Index');

  useEffect(() => {
    // Simulate checking if it's a new user, you might want to replace this with your actual logic
    const isNewUser = localStorage.getItem('cookies') === 'done' ? false :  true; // Placeholder logic
    if (isNewUser) {
      setModalIsOpen(true);
      localStorage.setItem('cookies' , 'done');
    }
  }, []);
 
  const goToStep2 = () => {
    // Transition to step 2
    setStep(2);
  };
  const goToStep1 = () => {
    // Transition to step 2
    setStep(1);
  };
  const closeModal = () => {
    // Close the modal
    setModalIsOpen(false);
  };
  const preferenceData = [

    {
        "type": t('essential_cookies'),
        "notChoosable": true,

        "description": t('essential_cookies-define'),
    },
    {
        "type": t('security_cookies'),
        "description": t('security_cookies_define'),
    },
    {
        "type": t('analytics_cookies'),
        "description": t('analytics_cookies_define'),
    },
    {
        "type": t('advertising_cookies'),
        "description": t('advertising_cookies_define'),
    },
    {
      "type": t('personalization_cookies'),
      "description": t('personalization_cookies_define'),
  }
];

const [cookies, setCookies] = useState(preferenceData.map(cookie => ({
    ...cookie,
    isChecked: true 
  })));

  // Handle switch toggle
  const handleToggle = (index:any) => {
    const newCookies = cookies.map((cookie, i) => {
      if (i === index) {
        return { ...cookie, isChecked: !cookie.isChecked }; // Toggle the checked state
      }
      return cookie;
    });
    setCookies(newCookies);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Welcome Modal"
      className="CookieModal"
      overlayClassName="CookieOverlay"
    >
      {step === 1 && (
        <div>
          <div className="flex justify-between items-center pb-5 border-b mb-10">
            <h2 className="text-3xl font-bold ">{t('cookie_preference_heading')} </h2>
            <a
              className=" border-black border-b cursor-pointer"
              onClick={closeModal}
            >
              {" "}
              {t('continue_without_accepting')} 
            </a>
          </div>
          <div className="text-xl text-black flex flex-col gap-6 items-start">
            <p>  {t('welcome_to_website')} </p>
            <p>
            {t('cookie_experience_text')}
            </p>
            <p>
            {t('accept_and_continue_cookie')}
            </p>
            <div className="flex gap-5 w-full">
              <button
                onClick={goToStep2}
                className="transition-all w-full bg-transparent hover:bg-black text-black  hover:text-white py-2 px-4 border border-black hover:border-transparent rounded-3xl"
              >
                                        {t('set_cookie_preferences')}

              </button>
              <button
                onClick={closeModal}
                className="transition-all w-full bg-black hover:bg-transparent hover:text-black text-white  py-2 px-4 border border-black rounded-3xl"
              >
                         {t('accept_and_continue_button')}

              </button>
            </div>
            <p>
            {t('change_cookie-preference')}

            </p>
            <a className=" border-black border-b cursor-pointer">
            {t('cookie_list')}

            </a>
            <p>
            {t('more_information')}
              
              <a className=" border-black border-b cursor-pointer">{t('here')}</a>
            </p>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
        <div className="flex justify-between items-center pb-5 border-b mb-10">
            <h2 className="text-3xl font-bold ">{t('cookie_preference_heading')} </h2>
            <a
              className=" border-black border-b cursor-pointer"
              onClick={closeModal}
            >
              {" "}
              {t('continue_without_accepting')} 
            </a>
          </div>
          <div className="text-xl text-black flex flex-col gap-6 items-start">
            <p>{t('what_is_a_cookie')}</p>
            <p>
            {t('cookie_define')}
            </p>
            <p>
            {t('accept_or_reject')}
              
            </p>

         
      {cookies.map((cookie, index) => (
        <div key={index} className="flex gap-10 mb-10">
           <Switch
            isChecked={cookie.isChecked}
            isDisabled={cookie.notChoosable}
            onChange={() => handleToggle(index)}  
          />
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-2xl">{cookie.type}</h3>
            <p>{cookie.description}</p>
          </div>
        </div>
      ))}
        <div className="flex gap-5 w-full">
              <button
                onClick={goToStep1}
                className="transition-all w-full bg-transparent hover:bg-black text-black  hover:text-white py-2 px-4 border border-black hover:border-transparent rounded-3xl"
              >
               {t('back-button')}
              </button>
              <button
                onClick={closeModal}
                className="transition-all w-full bg-black hover:bg-transparent hover:text-black text-white  py-2 px-4 border border-black rounded-3xl"
              >
                               {t('save-button')}

              </button>
            </div>
            <p>
            You can change your preferences at any time by going to the "Cookies" module or to the "Privacy Settings" page. They are accessible through links at the bottom of any gutricious.com website page.

            </p>
            <a className=" border-black border-b cursor-pointer">
            {t('cookie_list')}

            </a>
            <p>
            {t('more_information')}
              
              <a className=" border-black border-b cursor-pointer"> &nbsp;{t('here')}</a>
            </p>
            <div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CookiesModal;
