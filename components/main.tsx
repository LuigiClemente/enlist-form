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
import { useRouter, useSearchParams } from "next/navigation";
import PhoneInput from 'react-phone-number-input';
import Image from "next/image";
import axios from "axios";
import { toast } from "react-hot-toast";

const Main = () => {
  const referralOptions: any = {
    en: [
      "Google", "TV", "Facebook", "Instagram", "TikTok", "YouTube",
      "Family or Friends", "Health Professional (e.g., Dietitian, Doctor)",
      "Podcast", "Blog Post", "Health Fair", "Other"
    ],
    de: [
      "Google", "Fernsehen", "Facebook", "Instagram", "TikTok", "YouTube",
      "Familie oder Freunde", "Gesundheitsfachkraft (z.B. Ernährungsberater, Arzt)",
      "Podcast", "Blogbeitrag", "Gesundheitsmesse", "Andere"
    ],
    nl: [
      "Google", "TV", "Facebook", "Instagram", "TikTok", "YouTube",
      "Familie of Vrienden", "Gezondheidsprofessional (bijv. Diëtist, Dokter)",
      "Podcast", "Blogpost", "Gezondheidsbeurs", "Overige"
    ],
    fr: [
      "Google", "Télévision", "Facebook", "Instagram", "TikTok", "YouTube",
      "Famille ou Amis", "Professionnel de santé (par ex. Diététicien, Médecin)",
      "Podcast", "Article de blog", "Salon de santé", "Autre"
    ],
    es: [
      "Google", "Televisión", "Facebook", "Instagram", "TikTok", "YouTube",
      "Familia o Amigos", "Profesional de la salud (p.ej., Dietista, Médico)",
      "Podcast", "Entrada de blog", "Feria de salud", "Otro"
    ],
    pt: [
      "Google", "Televisão", "Facebook", "Instagram", "TikTok", "YouTube",
      "Família ou Amigos", "Profissional de saúde (ex.: Dietista, Médico)",
      "Podcast", "Post de blog", "Feira de saúde", "Outro"
    ],
    it: [
      "Google", "TV", "Facebook", "Instagram", "TikTok", "YouTube",
      "Famiglia o Amici", "Professionista della salute (es. Dietista, Medico)",
      "Podcast", "Post del blog", "Fiera della salute", "Altro"
    ]
  };

  const [isHovered, setIsHovered] = useState(false);
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [isLangBtnHovered, setIsLangBtnHovered] = useState(false);
  const [langOpen, setLangOpen] = useState<boolean>(false);
  const [showOtherField, setShowOtherField] = useState(false);
  const countries: Country[] = countriesJson as any;
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  }: any = useForm({
    mode: "onTouched",
  });
  const router = useRouter();
  const localActive = useLocale();
  const [selectedLanguage, setSelectedLanguage] = useState(localActive);
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!email) {
      router.push('https://gutricious.com/home');
    } else {
      setShowForm(true);
    }
  }, [email]);

  const onSubmit = async (data: any) => {

    const formData = new FormData();
    if (email) {
      formData.append("mauticform[email]", email)
    }
    formData.append("mauticform[first_name]", data.firstName);
    formData.append("mauticform[last_name]", data.lastName);
    formData.append("mauticform[date_of_birth]", data.dateOfBirth);
    formData.append("mauticform[country]", data.country);
    formData.append("mauticform[phone_number]", data.phoneNumber);
    formData.append("mauticform[referrel_source]", data.referralSource);
    formData.append("mauticform[other_referrel_source]", data.otherReferralSource);
    formData.append("mauticform[motivation]", data.mainMotivation);
    formData.append("mauticform[formId]", "2");
    formData.append("mauticform[messenger]", "1");
    formData.append("mauticform[formName]", "enlistform");

    try {
      const res = await axios.post("https://mautic.gutricious.com/form/submit?formId=2", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      if (res.status === 201) {

        reset();

      }
    } catch (e: any) {
      console.log(e)
      reset();

    } finally {
      router.push('https://gutricious.com/home?showMarketForm=true');
    }
  };

  const handleReferralChange = (value: string) => {
    // List of all translations for "Other" across different languages
    const otherOptions = [
      "Other",   // English
      "Andere",  // German
      "Overige", // Dutch
      "Autre",   // French
      "Otro",    // Spanish
      "Outro",   // Portuguese
      "Altro"    // Italian
    ];

    // Show the additional input field if the selected value is any "Other" variant
    setShowOtherField(otherOptions.includes(value));
  };

  const changeLanguage = (langCode: string) => {

    startTransition(() => {
      router.replace(`/${langCode}`);
    });

  };
  const t = useTranslations('Index');


  return (
    <>
      {showForm && <div className="h-screen grid place-items-center bg-gray-50">
        <div className="video-background">
          <video loop muted autoPlay>
            <source src="https://res.cloudinary.com/dru0isacu/video/upload/v1715804979/gutricious/clouds_c3rd6k.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Card placeholder="" color="transparent" shadow={true} className="p-7 w-[90vw] max-w-[600px] mt-10 bg-white">
          <div className="flex w-full justify-between items-center">
            <Typography placeholder="" variant="h4" color="blue-gray">
              <Image
                loader={({ src }) => src}
                className="-ml-2"
                alt='logo'
                src="https://res.cloudinary.com/dru0isacu/image/upload/v1715804980/gutricious/logo_dfqrwd.webp" width={150} height={70}>
              </Image>
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
                <div className="h-full w-full absolute z-20 cursor-pointer inner-lang-btn" onMouseEnter={() => { setIsLangBtnHovered(true) }}
                  onMouseLeave={() => setIsLangBtnHovered(false)} onClick={() => setLangOpen(!langOpen)}>

                </div>

                <CiGlobe color={"#000000"} />
              </div>
            </Popover>
          </div>
          <Typography placeholder="" className="mt-1 font-normal text-blue-gray-700">
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
                rules={{ required: t('first_name-required') }}
                render={({ field }) => (
                  <Input crossOrigin=""
                    size="lg"
                    {...field}
                    label={t('first_name')}
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
                rules={{ required: t('last_name-required') }}

                render={({ field }) => (
                  <Input crossOrigin=""
                    size="lg"
                    {...field}
                    label={t('last_name')}
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
                rules={{ required: t('Date_of_birth_is_required') }}
                render={({ field }) => (
                  <Input
                    crossOrigin={''}
                    {...field}
                    type="date"
                    label={t('date_of_birth')}
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
                rules={{ required: t('how_did_you_hear_about_us_required') }}
                render={({ field }) => (
                  <Select
                    placeholder=""
                    {...field}
                    label={t('how_did_you_hear_about_us')}
                    onChange={(e: any) => {
                      field.onChange(e);
                      handleReferralChange(e);
                    }}
                    error={Boolean(errors?.referralSource?.message)}
                  >
                    {referralOptions[selectedLanguage].map((option: any, index: any) => (
                      <Option key={index} value={option}>
                        {option}
                      </Option>
                    ))}
                  </Select>
                )}
              />
              {errors?.referralSource?.message && (
                <span className="error-text">{errors?.referralSource?.message}</span>
              )}
              {showOtherField && (
                <>
                  <div className="my-5"></div>
                  <Controller
                    name="otherReferralSource"
                    control={control}
                    rules={{ required: t('otherPlaceholder') }}
                    render={({ field }) => (
                      <Input
                        crossOrigin={''}
                        {...field}
                        label={t('otherPlaceholder')}
                        size="lg"
                        error={Boolean(errors?.otherReferralSource?.message)}
                      />
                    )}
                  />
                  {errors?.otherReferralSource?.message && (
                    <span className="error-text">{errors?.otherReferralSource.message}</span>
                  )}
                </>
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
                    required
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
              <button color="black" type="submit" className="btn-primary">
                {t('submit_button')}
              </button>
            </div>
          </form>
        </Card>
        <div className="mt-10 opacity-0">
          .
        </div>
      </div>
      }
    </>
  );
};

export default Main;