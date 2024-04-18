"use client";
import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ModalComponent from "../Modal/modal";
import { useLocale, useTranslations } from "next-intl";
import { languages } from "@/utils/languages";
import { useTranslation } from "react-i18next";

const Cards = ({ cards, selectCard, executeScroll }: any) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const localActive = useLocale();
  const langText = languages.find((lang)=>lang.code === localActive)?.text || "english";
const t = useTranslations('Index');
  

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
  setModalIsOpen(false);
  }

  // Extracted Code
  return (
    <section className=" flex flex-col justify-between items-center pt-16 pb-12 max-w-[100vw] overflow-x-hidden">
      <div className="custom-container">
        <h1 className="text-5xl  xs:text-7xl md:text-8xl 2x:text-9xl  font-bold text-center   ">
        {t('sectionTwoHeadingPartOne')}
        </h1>
        <p className="text-text-grey text-2xl  2xl:text-4xl my-10  max-w-[1050px] mx-auto">
        {t('sectionTwoSubHeading')}
        </p>
       <a href="#footer">
       <button className="btn-primary mb-5 mx-auto">
          
          {t('getStartedButtonText')}
  
          </button>
       </a>

        <div className="mt-10 mb-10 flex  flex-wrap gap-x-16 md:gap-x-32 gap-y-10 justify-center items-center custom-container">
        <Image height={300} width={1296} className="object-contain w-[95%] max-w-[2000px] h-[40px] mx-auto hidden md:block" src={`/assets/logos/${localActive}-desktop-logos.webp`} alt="company logo" />
        <Image height={300} width={1296} className="object-contain h-[37px] max-w-[1296px] mx-auto hidden xs:block md:hidden mb-20 w-[80%] " src={`/assets/logos/tablet-${localActive}-logos.webp`} alt="company logo" />
        <Image height={300} width={1296} className="object-contain h-[96px] max-w-[1296px] mx-auto block xs:hidden mb-20 h" src={`/assets/logos/${langText}-tablet-logos.webp`} alt="company logo" />


        </div>
      </div>
      <div className=" Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-l__4MlQw Section--gap-none Home_SectionHero__schema__Ir_9O translate-y-[-44px] md:max-h-[570px] mt-16 md:mt-0 sm:max-h-[1000px] max-h-[700px] ">
        <div
          className="CubeSchema_CubeSchema__JblXC"
          style={
            {
              "--animation-delay":
                "calc(var(--base-animation-delay) + 5 * var(--step-animation-delay));",
            } as any
          }
        >
          <div className="CubeSchema_CubeSchema__input__3UQYh ">
            <div className="flex flex-col gap-[2.3vw] max-[899px]:hidden sm:gap-1.5 md:gap-2">
              <div className="flex sm:flex-col gap-[2.3vw] sm:gap-1.5 md:gap-2">
                <div className="flex flex-row-reverse w-[27.25vw] 2xl:w-[22rem] h-[7vw] 2xl:h-[5.5rem] pr-1 sm:pl-4 sm:pr-2 rounded-full text-base bg-text-grey  text-white  sm:hidden !pl-1 sm:flex-row sm:w-[140px] sm:h-[2.75vw] ">
                  <div className="w-full text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base 2xl:text-2xl">
                  {t('Wellbeing')}
                  </div>
                 
                </div>
                <div className="   flex flex-row-reverse w-[27.25vw]  2xl:w-[140px] h-[7vw] 2xl:h-[4.8rem] items-center font-bold pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-[#878e96]  text-white  sm:flex-row sm:w-[140px] sm:h-[2.75vw] ">
                  <div className="w-full text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base 2xl:text-2xl">
                  {t('Goals')}
                  </div>
                  
                </div>
                <div className="  flex flex-row-reverse w-[27.25vw]  2xl:w-[140px] h-[7vw] 2xl:h-[4.8rem] items-center font-bold pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-[#878e96]   text-white  sm:flex-row sm:w-[140px] sm:h-[2.75vw] ">
                  <div className="w-full text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base 2xl:text-2xl">
                  {t('Lipids')}
                  </div>
                 
                </div>
              
              </div>
              <div className="flex sm:flex-col gap-[2.3vw] sm:gap-1.5 md:gap-2">
              <div className="  flex flex-row-reverse w-[27.25vw]  2xl:w-[140px] h-[7vw] 2xl:h-[4.8rem] items-center font-bold pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-text-grey  text-white  sm:flex-row sm:w-[140px] sm:h-[2.75vw] ">
                  <div className="w-full text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base 2xl:text-2xl">
                  {t('Microbiome')}

                  </div>
                  
                </div>
                <div className="flex flex-row-reverse w-[27.25vw]  2xl:w-[140px] h-[7vw] 2xl:h-[4.8rem] items-center font-bold pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-text-grey  text-white undefined sm:flex-row sm:w-[140px] sm:h-[2.75vw] ">
                  <div className="w-full text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base 2xl:text-2xl ">
                  {t('Nutrition')}

                  </div>
                  
                </div>
                <div className=" flex flex-row-reverse w-[27.25vw]  2xl:w-[140px] h-[7vw] 2xl:h-[4.8rem] items-center font-bold pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-text-grey  text-white  sm:flex-row sm:w-[140px] sm:h-[2.75vw] ">
                  <div className="w-full text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base 2xl:text-2xl">
                  {t('Glucose')}

                  </div>
                 
                </div>
              </div>
              <div className="flex sm:flex-col gap-[2.3vw] sm:gap-1.5 md:gap-2">
                <div className=" flex flex-row-reverse w-[27.25vw]  2xl:w-[140px] h-[7vw] 2xl:h-[4.8rem] items-center font-bold pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-[#878e96]   text-white   sm:flex-row sm:w-[140px] sm:h-[2.75vw] ">
                  <div className="w-full text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base 2xl:text-2xl">
                  {t('Metabolism')}

                  </div>
                
                </div>
                <div className=" flex flex-row-reverse w-[27.25vw]  2xl:w-[140px] h-[7vw] 2xl:h-[4.8rem] items-center font-bold pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-[#878e96]   text-white  sm:flex-row sm:w-[140px] sm:h-[2.75vw] ">
                  <div className="w-full text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base 2xl:text-2xl">
                  {t('Cardio')}
                  </div>
                 
                </div>
              
                <div className="flex flex-row-reverse w-[27.25vw]  2xl:w-[140px] h-[7vw] 2xl:h-[4.8rem] items-center font-bold pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-text-grey  text-white  sm:hidden sm:flex-row sm:w-[140px] sm:h-[2.75vw] ">
                  <div className="w-full text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base 2xl:text-2xl">
                  {t('Targeted')}
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[2.3vw] min-[900px]:hidden sm:gap-1.5 md:gap-2">
              <div className="flex  gap-[2.3vw] sm:gap-1.5 md:gap-2">
                <div className="flex flex-row-reverse w-[27.25vw]  2xl:w-[140px] h-[7vw] 2xl:h-[4.8rem] items-center font-bold pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-text-grey  text-white   ">
                  <div className="w-full text-[2.75vw]  flex items-center justify-center xl:text-base 2xl:text-2xl">
               
                  {t('Nutrition')}

                  </div>
                 
                </div>
                <div className="flex flex-row-reverse w-[27.25vw]  2xl:w-[140px] h-[7vw] 2xl:h-[4.8rem] items-center font-bold pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-text-grey  text-white   ">
                  <div className="w-full text-[2.75vw]  flex items-center justify-center xl:text-base 2xl:text-2xl">
                  {t('Lipids')}

                  </div>
                  
                </div>
                <div className="flex flex-row-reverse w-[27.25vw]  2xl:w-[140px] h-[7vw] 2xl:h-[4.8rem] items-center font-bold pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-text-grey  text-white   ">
                  <div className="w-full text-[2.75vw]  flex items-center justify-center xl:text-base 2xl:text-2xl">
               
                  {t('Wellbeing')}

                  </div>
                 
                </div>
              </div>
              <div className="flex  gap-[2.3vw] sm:gap-1.5 md:gap-2">
                <div className="flex flex-row-reverse w-[27.25vw]  2xl:w-[140px] h-[7vw] 2xl:h-[4.8rem] items-center font-bold pr-1  sm:pl-4 sm:pr-2 rounded-full text-base bg-text-grey  text-white  !pl-1  ">
                  <div className="w-full text-[2.75vw]  flex items-center justify-center xl:text-base 2xl:text-2xl">
                  {t('Cardio')}

                  </div>
                 
                </div>
                <div className="flex flex-row-reverse w-[27.25vw]  2xl:w-[140px] h-[7vw] 2xl:h-[4.8rem] items-center font-bold pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-text-grey  text-white   ">
                  <div className="w-full text-[2.75vw]  flex items-center justify-center xl:text-base 2xl:text-2xl">
                  
                  {t('Glucose')}

                  </div>
                  
                </div>
                <div className="flex flex-row-reverse w-[27.25vw]  2xl:w-[140px] h-[7vw] 2xl:h-[4.8rem] items-center font-bold pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-text-grey  text-white   ">
                  <div className="w-full text-[2.75vw]  flex items-center justify-center xl:text-base 2xl:text-2xl">
                  {t('Goals')}
                  </div>
                  
                </div>
              </div>
              <div className="flex  gap-[2.3vw] sm:gap-1.5 md:gap-2">
                <div className="flex flex-row-reverse w-[27.25vw]  2xl:w-[140px] h-[7vw] 2xl:h-[4.8rem] items-center font-bold pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-text-grey  text-white     ">
                  <div className="w-full text-[2.75vw]  flex items-center justify-center xl:text-base 2xl:text-2xl">
                  {t('Metabolism')}
                  </div>
                 
                </div>
                <div className="flex flex-row-reverse w-[27.25vw]  2xl:w-[140px] h-[7vw] 2xl:h-[4.8rem] items-center font-bold pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-text-grey  text-white   ">
                  <div className="w-full text-[2.75vw]  flex items-center justify-center xl:text-base 2xl:text-2xl">
                  {t('Glucose')}

                  </div>
                 
                </div>
                <div className="flex flex-row-reverse w-[27.25vw]  2xl:w-[140px] h-[7vw] 2xl:h-[4.8rem] items-center font-bold pr-1 sm:pl-4 sm:pr-2 rounded-full text-base bg-text-grey  text-white !pl-1  ">
                  <div className="w-full text-[2.75vw]  flex items-center justify-center xl:text-base 2xl:text-2xl">
                  {t('Targeted')}

                  </div>
                 
                </div>
              </div>
            </div>
            {/* <Image src="/assets/images/desktop green dots.svg" alt="svg" height={300} width={400} className="w-[135px] h-[468px] 2xl:w-[180px]"/> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 153 424"
              fill="none"
              className="CubeSchema_CubeSchema__svg--desktop__fDVWm !w-[106px] lg:!w-[136px] 2xl:!w-[173px]"
            >
              <g
                className="input-lines-7_svg__scheme-dash-animated"
                stroke="#0a5951"
                strokeDasharray="0.24 5.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                clipPath="url(#input-lines-7_svg__a)"
              >
                <path d="M153 212H1.383" />
                <path
                  d="M153 224H82.057a24 24 0 00-16.075 6.178L39.85 253.749a24 24 0 01-16.075 6.179H1"
                  opacity="0.9"
                />
                <path
                  d="M153 236H93.844a24 24 0 00-19.969 10.687l-33.75 50.626A24 24 0 0120.155 308H1"
                  opacity="0.6"
                />
                <path
                  d="M153 248h-48.503a24 24 0 00-21.872 14.12l-36.03 79.76A24 24 0 0124.725 356H1"
                  opacity="0.4"
                />
                <path
                  d="M153 200H82.057a24 24 0 01-16.075-6.178L39.85 170.251a24 24 0 00-16.075-6.179H1"
                  opacity="0.9"
                />
                <path
                  d="M153 188H93.844a24 24 0 01-19.969-10.687l-33.75-50.626A24 24 0 0020.155 116H1"
                  opacity="0.6"
                />
                <path
                  d="M153 176h-48.503a24 24 0 01-21.872-14.12l-36.03-79.76A24 24 0 0024.725 68H1"
                  opacity="0.4"
                />
              </g>
              <defs>
                <clipPath id="input-lines-7_svg__a">
                  <path fill="#fff" d="M0 0h153v424H0z" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 83"
              fill="none"
              className="CubeSchema_CubeSchema__svg--mobile__O_Rhn CubeSchema_CubeSchema__svg--mobile__O_Rhn-input"
            >
              <g
                className="input-lines-7-mobile_svg__scheme-dash-animated"
                stroke="#0a5951"

                strokeDasharray="0.24 5.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                mask="url(#input-lines-7-mobile_svg__fade_1)"
              >
                <path stroke="transparent" d="M10 56V0" />
                <path d="M124 81V62.074a16 16 0 00-12.436-15.598L28.436 27.482A16 16 0 0116 11.884V1" />
                <path d="M136 81.08V55.708a20 20 0 00-13.856-19.033L74.85 21.437A16 16 0 0163.765 6.211V1" />
                <path d="M148 81V49.028a24 24 0 00-13.769-21.71l-13.051-6.15A16 16 0 01112 6.694V1M160 80V0M172 81V49.028a24 24 0 0113.769-21.71l13.051-6.15A16 16 0 00208 6.694V1" />
                <path d="M184.088 81.08V55.708a20 20 0 0113.856-19.033l47.206-15.238a16 16 0 0011.085-15.226V1" />
                <path d="M196 81V62.074a16 16 0 0112.436-15.598l83.128-18.994A16 16 0 00304 11.884V1" />
              </g>
              <defs>
                <linearGradient
                  id="input-lines-7-mobile_svg__gradient_1"
                  y2={1}
                  x2={0}
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset="0.8" stopColor="#fff" />
                  <stop offset={1} stopColor="#fff" stopOpacity={0} />
                </linearGradient>
                <mask
                  id="input-lines-7-mobile_svg__fade_1"
                  maskContentUnits="objectBoundingBox"
                >
                  <path
                    fill="url(#input-lines-7-mobile_svg__gradient_1)"
                    d="M0 0h2v1H0z"
                  />
                </mask>
              </defs>
            </svg>

           
         
          </div>
          <div
          className="CubeSchema_CubeSchema__cube__aVGJu !w-auto relative md:mt-10 md:mt-0 "

          >
          <div className="lined-text-box">
          <Image src="/assets/images/lined-box.png" alt="svg" height={300} width={400} className="md:h-[400px] max-w-[275px] sm:max-w-[380px] w-auto  "/>
      
                <Image
          alt="logo"
          height={70}
          width={120}
          objectFit="contain"
          className="  top-text w-[92px] sm:w-[120px]"
          src={`/assets/day/logo.webp`}
        ></Image>
            <span className="bottom-text">
            {t('cardBottomKey')}
            </span>
            </div>
        
            {cards.map((card: any, index: number) => (
              <a
                key={index}
                className={`CubeSchema_CubeSchema__card__dzHa6 custom-cube custom-cube-${
                  index + 1
                }`}
                id={`custom-cube-${
                  index + 1
                }`}
                style={
                  {
                  "--card-bg": card.color,
                    "--card-border": card.borderColor,
                    "--card-index": index,
                    "--card-offset": `${card.cardOffset}`,
                    "--card-angle": "55deg",
                    "--card-dx": "40%",
                    "--card-duration": "300ms",
                    "--card-color": `${card.textColor}`,
                    background: card.color,
                  } as any
                }
              >
                <div className="content-box">
                  <p className="CubeSchema_CubeSchema__card_title__gND6b" style={{color : card.textColor}}>
                    {card.cardName}
                  </p>
                  <p className="CubeSchema_CubeSchema__card_content__K1bdM" style={{color : card.textColor}}>
                    {card.cardDescription}
                  </p>
                </div>
                <div className="CubeSchema_CubeSchema__card_footer__YU7RW">
                  <img
                    className={classNames(
                      "CubeSchema_CubeSchema__card_badge__1a_FX",
                      card.id === 4 ? "-bottom-9" : ""
                    )}
                    src={card.bottomIcon}
                    width="32"
                    height="32"
                    style={{
                      height: card.id === 2 ? "37px !important" : "",
                    }}
                    alt={`Data Modeling badge ${card.id}`}
                  />
                  <div
                    onClick={() => selectCard(card.id)}
                    style={{ color : card.textColor}}
                    className="CubeSchema_CubeSchema__card_readMore__ovs9v relative z-20 cursor-pointer"
                  >
{t('readMoreButton')}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        fill={card.textColor}
                        d="m9.302 0-1.44 1.44 6.176 6.208H.79v2.176l13.28-.032-6.208 6.24 1.44 1.472 8.48-8.48v-.576L9.302 0Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="flex items-center flex-col md:flex-row h-[355px] sm:h-[520px] md:h-auto">

          <Image src="/assets/images/desktop yellow dots.svg" alt="svg" height={300} width={400} className="hidden md:block w-[138px] h-[535px] 2xl:h-[672px] 2xl:w-[189px]"/>
       
          <Image src="/assets/images/desktop-boxes.webp" alt="svg" height={300} width={400} className="hidden md:block h-[248px] 2xl:h-[300px] w-auto"/>
    
          <Image src="/assets/images/desktop yellow dots.svg" alt="svg" height={300} width={400} className="block md:hidden h-[398px] sm:h-[454px]  rotate-90 translate-y-[-151px] "/>
       
          <Image src="/assets/images/mobile-boxes.webp" alt="svg" height={300} width={400} className="block md:hidden h-auto  w-[95%] max-w-[253px] sm:max-w-[293px] translate-y-[-307px] md:translate-t-[-313px] md:max-w-[332px]  "/>
          
          </div>


      
        </div>
      </div>

      <div className="custom-container !m-0 mt-10">
        <h1 className="text-3xl md:text-5xl  font-bold text-center ">
        {t('cardQuestion')}

        </h1>
        <p className="text-text-grey text-2xl md:text-3xl 2xl:text-4xl my-8  max-w-[900px] 2xl:max-w-[1296px] mx-auto ">
        {t('cardQuestionAnswer')}
        </p>

        <a
          className="text-2xl font-bold 2xl:text-4xl cursor-pointer inline-flex gap-5 justify-center items-center border-b border-gray-600  mx-auto pb-2"
          onClick={openModal}
        >
          <span>{t('questionAnswerPitch')}</span>

          <FaArrowRight />
        </a>
      </div>
      <div className="AnswerModal">


      <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal} />
      </div>
    </section>
  );
};

export default Cards;

