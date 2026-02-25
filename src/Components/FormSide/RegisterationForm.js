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

  return (
    <form
      onSubmit={(e) => {
        if (handleSubmit(inputValue).message !== "Success!") {
          e.preventDefault();
        }
      }}
    >
      <HeaderSection />
      <InputSection handleChange={setInputValue} value={inputValue} />
      <TermsSection handleChange={setInputValue} value={inputValue} />
      <SubmitSection />
      <DividerSection />
      <SocialButtonsSection />
    </form>
  );
}
