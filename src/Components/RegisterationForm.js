import HeaderSection from "./HeaderSection";
import InputSection from "./InputSection";
import TermsSection from "./TermsSection";
import SubmitSection from "./SubmitSection";
import DividerSection from "./DividerSection";
import SocialButtonsSection from "./SocialButtonsSection";

import { useState } from "react";


export default function RegisterationForm() {
  const [inputValue, setInputValue] = useState({fName : "", lName : "", email : "", password : "", terms : false});

  return (
    <form>
      <HeaderSection />
      <InputSection handlChange = {setInputValue} value = {inputValue}/>
      <TermsSection handlChange = {setInputValue} value = {inputValue}/>
      <SubmitSection />
      <DividerSection />
      <SocialButtonsSection />
    </form>
  );
}
