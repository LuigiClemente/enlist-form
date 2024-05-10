'use client';

interface Country {
  id: number;
  name: string;
  translations: {
      [key: string]: string; // This defines an index signature, allowing any string as a key
  }
}
  

import countriesJson from "./countries.json";
import {
    Card,
    Input,
    Typography,
    Select,
    Option,
    Button,
    Textarea,
  } from "@material-tailwind/react";
  import { CiGlobe } from "react-icons/ci";
import { Popover } from "react-tiny-popover";
import { languages } from "@/utils/languages";
  import { startTransition, useEffect, useState } from "react";
  import { useForm, Controller } from "react-hook-form";
  import 'react-phone-number-input/style.css';
  import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
  import PhoneInput from 'react-phone-number-input';
import Image from "next/image";


  const Main = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [navOpen , setNavOpen] =  useState<boolean>(false);
    const [isLangBtnHovered , setIsLangBtnHovered] = useState(false);
    const [langOpen , setLangOpen] =  useState<boolean>(false);
    const [showOtherField, setShowOtherField] = useState(false);
    const countries : Country[] =  countriesJson as any;

    const {
      control,
      handleSubmit,
      formState: { errors },
      reset,
    } :any= useForm({
      mode: "onTouched",
    });
    const router = useRouter();
  const localActive = useLocale();
  const [selectedLanguage, setSelectedLanguage] = useState(localActive);

    const onSubmit = (data:any) => console.log(data);
  
    const handleReferralChange = (value:any) => {
        console.log({value})
        setShowOtherField(value === "Other");
      };
      const changeLanguage = (langCode : string) => {
    
        startTransition(() => {
          router.replace(`/${langCode}`);
        });
     
      };
      const t = useTranslations('Index');
      
    return (
      <div className="h-screen grid place-items-center bg-gray-50">
        <div className="video-background">
        <video loop muted autoPlay>
            <source src="/clouds.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
         <Card placeholder="" color="transparent" shadow={true} className="p-7 w-[90vw] max-w-[600px] mt-10 bg-white">
           <div className="flex w-full justify-between items-center">
           <Typography placeholder="" variant="h4" color="blue-gray">
            <Image className="-ml-2" alt='logo' src={'/logo.webp'} width={150} height={70}></Image>
          </Typography>
          <Popover
  isOpen={langOpen}
  
  positions={['left', 'top']} 
  padding={10}
  onClickOutside={() => setLangOpen(false)}
  content={({ position, nudgedLeft, nudgedTop }) => ( 
    <div className="languages-box">
     {languages.map((lang) => (
            <div
              key={lang.code}
              className={`language ${selectedLanguage === lang.code ? 'selected' : ''}`}
              onClick={() => changeLanguage(lang.code)}
            >
              <span>{lang.label}</span>
              <svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" >
                <path clipRule="evenodd" d="M20.54 7.225 9.58 18.185l-6.12-6.12 1.415-1.414 4.705 4.706 9.546-9.546z"></path>
              </svg>
            </div>
          ))}
    
    
    </div>
  )}
>
  <div className={`lang-btn relative cursor-pointer ${isLangBtnHovered ? 'hovered' : ''} hover:scale-[1.15] transition-all duration-300`} onClick={() => setLangOpen(!langOpen)}>
  <div className="h-full w-full absolute z-20 cursor-pointer inner-lang-btn"    onMouseEnter={() =>{setIsLangBtnHovered(true)}}
        onMouseLeave={() => setIsLangBtnHovered(false)} onClick={() => setLangOpen(!langOpen)}>

          </div>

  <CiGlobe color={  "#000000"}/>
  </div>
</Popover>
           </div>
           <Typography placeholder="" color="gray" className="mt-1 font-normal">
            {t('fill_form_to_connect')}
          </Typography>
          <br />
          <form
            className="mb-4  grid grid-cols-2 gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="col-span-2">
              <Controller
                name="firstName"
                control={control}
                rules={{ required:  t('first_name-required') }}
                render={({ field }) => (
                    <Input  crossOrigin=""
                    size="lg"
                    {...field}
                    label= {t('first_name')}
                    error={Boolean(errors?.firstName?.message)}
                  />
                )}
              />
              {errors?.firstName?.message && (
                <span className="error-text">{errors?.firstName?.message}</span>
              )}
            </div>
            <div className="col-span-2">
              <Controller
                name="lastName"
                control={control}
                rules={{ required:  t('last_name-required') }}

                render={({ field }) => (
                   <Input crossOrigin=""
                    size="lg"
                    {...field}
                    label= {t('last_name')}
                    error={Boolean(errors?.lastName?.message)}
                  />
                )}
              />
              {errors?.lastName?.message && (
                <span className="error-text">{errors?.lastName?.message}</span>
              )}
            </div>
            <div className="col-span-2">
              <Controller
                name="dateOfBirth"
                control={control}
                rules={{ required:  t('Date_of_birth_is_required') }}
                render={({ field }) => (
                  <Input
                  crossOrigin={''}
                    {...field}
                    type="date"
                    label={ t('date_of_birth')}
                    error={Boolean(errors?.dateOfBirth?.message)}
                    size="lg"
                  />
                )}
              />
              {errors?.dateOfBirth?.message && (
                <span className="error-text">{errors.dateOfBirth.message}</span>
              )}
            </div>
            <div className="col-span-2">
            <Controller
  name="country"
  control={control}
  rules={{ required: t('Country_is_required') }}
  render={({ field }) => (
    <Select
    placeholder={''}
      {...field}
      label={t('select_country')}
      error={Boolean(errors?.country?.message)}
    >
      {countries.map((country) => (
        <Option key={country.id} value={country.name}>
          {localActive && country.translations[localActive] ? country.translations[localActive] : country.name}
        </Option>
      ))}
    </Select>
  )}
/>

              {errors?.country?.message && (
                <span className="error-text">{errors?.country?.message}</span>
              )}
            </div>
            
         
            <div className="col-span-2">
            <Controller
  name="phoneNumber"
  control={control}
  rules={{ 
    required: t('phone_required'),
    pattern: {
      value: /^[0-9]+$/, // Ensures only numbers are entered
      message: "Invalid phone number" // Error message for invalid input
    }
  }}
  render={({ field }) => (
    <Input
    crossOrigin={''}
      {...field}
      type="tel" // Use 'tel' to invoke numeric keyboard on mobile devices
      label={t('phone')}
      error={Boolean(errors?.phoneNumber?.message)}
      size="lg"
    />
  )}
/>
{errors?.phoneNumber?.message && (
  <span className="error-text">{errors?.phoneNumber.message}</span>
)}

            </div>
            <div className="col-span-2">
              
            <Controller
  name="referralSource"
  control={control}
  rules={{ required:t('how_did_you_hear_about_us_required') }}
  render={({ field }) => (
    <Select
    placeholder={''}
      {...field}
      label={t('how_did_you_hear_about_us')}
      onChange={(e) => {
        field.onChange(e);
        handleReferralChange(e);
      }}
      error={Boolean(errors?.referralSource?.message)}
    >
      <Option value="Internet">Internet</Option>
      <Option value="Friend">Friend</Option>
      <Option value="Other">Other</Option>
    </Select>
  )}
/>

{errors?.referralSource?.message && (
  <span className="error-text">{errors?.referralSource.message}</span>
)}

{
showOtherField && (
 <>
    <div className="my-5">
        </div>
  <Controller
    name="otherReferralSource"
    control={control}
    rules={{ required: "Please specify how you heard about us" }}
    render={({ field }) => (
      <Input
      crossOrigin={''}
        {...field}
        label="Please specify"
        size="lg"
        error={Boolean(errors?.otherReferralSource?.message)}
      />
    )}
    /></>
)}

  
{errors?.otherReferralSource?.message && (
  <span className="error-text">{errors?.otherReferralSource.message}</span>
)}







            </div>
            <div className="col-span-2 why-us">
              <Controller
                name="mainMotivation"
                control={control}
                rules={{ required: t('main_motivation_required') }}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    label={t('main_motivation')}
                    error={Boolean(errors?.mainMotivation?.message)}
                    size="lg"
                  />
                )}
              />
              {errors?.mainMotivation?.message && (
                <span className="error-text">{errors.mainMotivation.message}</span>
              )}
            </div>

            <div className="col-span-2 grid grid-cols-1 gap-3">
              
 <Button placeholder="" color="black" type="submit" variant="filled">
{t('submit_button')}
</Button>
</div>
</form>
</Card>
<div className="mt-10 opacity-0">
  .
  </div>
</div>
);
};

export default Main;