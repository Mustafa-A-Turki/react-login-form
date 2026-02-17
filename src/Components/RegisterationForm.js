import HeaderSection from "./HeaderSection";
import InputSection from "./InputSection";
import TermsSection from "./TermsSection";
import SubmitSection from "./SubmitSection";
import DividerSection from "./DividerSection";
import SocialButtonsSection from "./SocialButtonsSection";

export default function RegisterationForm() {
  return (
    <form>
      <HeaderSection />
      <InputSection />
      <TermsSection />
      <SubmitSection />
      <DividerSection />
      <SocialButtonsSection />
    </form>
  );
}
