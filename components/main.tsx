'use client';
import {
    Card,
    Input,
    Typography,
    Select,
    Option,
    Button,
  } from "@material-tailwind/react";
  import { useEffect, useState } from "react";
  import { useForm, Controller } from "react-hook-form";
  import 'react-phone-number-input/style.css';
  import PhoneInput from 'react-phone-number-input';
  
  const Main = () => {
    const [showOtherField, setShowOtherField] = useState(false);
    const {
      control,
      handleSubmit,
      formState: { errors },
      reset,
    } :any= useForm({
      mode: "onTouched",
    });
  
    const onSubmit = (data:any) => console.log(data);
  
    const handleReferralChange = (value:any) => {
        console.log({value})
        setShowOtherField(value === "Other");
      };
      
    return (
      <div className="h-screen grid place-items-center bg-gray-50">
         <Card placeholder="" color="transparent" shadow={true} className="p-7 bg-white">
           <Typography placeholder="" variant="h4" color="blue-gray">
            Hi 👋
          </Typography>
           <Typography placeholder="" color="gray" className="mt-1 font-normal">
            Fill this form we really want to connect with you.
          </Typography>
          <br />
          <form
            className="mb-4 w-[500px] grid grid-cols-2 gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <Controller
                name="firstName"
                control={control}
                rules={{ required: "First name is required" }}
                render={({ field }) => (
                    <Input  crossOrigin=""
                    size="lg"
                    {...field}
                    label="First Name"
                    error={Boolean(errors?.firstName?.message)}
                  />
                )}
              />
              {errors?.firstName?.message && (
                <span className="error-text">{errors?.firstName?.message}</span>
              )}
            </div>
            <div>
              <Controller
                name="lastName"
                control={control}
                rules={{ required: "Last name is required" }}
                render={({ field }) => (
                   <Input crossOrigin=""
                    size="lg"
                    {...field}
                    label="Last Name"
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
                name="country"
                control={control}
                rules={{ required: "Country is required" }}
                render={({ field }) => (
                   <Select placeholder=""
                    {...field}
                    label="Select Country"
                    error={Boolean(errors?.country?.message)}
                  >
                    <Option value="USA">USA</Option>
                    <Option value="Canada">Canada</Option>
                  </Select>
                )}
              />
              {errors?.country?.message && (
                <span className="error-text">{errors?.country?.message}</span>
              )}
            </div>
            <div className="col-span-2">
              <Controller
                name="city"
                control={control}
                rules={{ required: "City is required" }}
                render={({ field }) => (
                   <Input crossOrigin=""
                    size="lg"
                    {...field}
                    label="City"
                    error={Boolean(errors?.city?.message)}
                  />
                )}
              />
              {errors?.city?.message && (
                <span className="error-text">{errors?.city?.message}</span>
              )}
            </div>
            <div className="col-span-2">
            <Controller
  name="phoneNumber"
  control={control}
  rules={{ 
    required: "Phone number is required",
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
      label="Phone Number"
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
  rules={{ required: "This field is required" }}
  render={({ field }) => (
    <Select
    placeholder={''}
      {...field}
      label="How did you hear about us?"
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
            <div className="col-span-2 grid grid-cols-2 gap-3">
               <Button placeholder="" type="reset" variant="outlined" onClick={() =>reset()}>
Reset
</Button>
 <Button placeholder="" type="submit" color="blue" variant="filled">
Submit
</Button>
</div>
</form>
</Card>
</div>
);
};

export default Main;