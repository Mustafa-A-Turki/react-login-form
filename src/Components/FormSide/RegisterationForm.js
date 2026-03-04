import HeaderSection from "./HeaderSection";
import InputSection from "./InputSection/InputSection";
import TermsSection from "./TermsSection";
import SubmitSection from "./SubmitSection/SubmitSection";
import DividerSection from "./DividerSection";
import SocialButtonsSection from "./SocialButtonSection/SocialButtonsSection";
import { handleSubmit } from "../../validation/formValidation";
import { useState } from "react";

export default function RegisterationForm() {
  const [inputValue, setInputValue] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    terms: false,
  });

  const [error, setError] = useState({success:"", field:"", message:""});

  return (
    <form
      onSubmit={(e) => {
        let errorMessage = handleSubmit(inputValue);
        if (errorMessage.message !== "Success!") {
          setError(errorMessage);
          setTimeout(()=>{
            document.querySelector(`input[name="${errorMessage.field}"]`)?.focus();
          })
          e.preventDefault();
        }
      }}
    >
      <HeaderSection />
      <InputSection handleChange={setInputValue} value={inputValue} error = {error}/>
      <TermsSection handleChange={setInputValue} value={inputValue} error = {error}/>
      <SubmitSection />
      <DividerSection />
      <SocialButtonsSection />
    </form>
  );
}
