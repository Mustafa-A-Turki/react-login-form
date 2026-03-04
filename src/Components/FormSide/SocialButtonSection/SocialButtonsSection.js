import SocialButton from "./SocialButton";
import googleIcon from "../../../assets/free-google-icon-kN2YqJG9RZ1z-512x512.png";
import appleIcon from "../../../assets/free-apple-icon-zrCYZCTFxijP-512x512.png";

export default function SocialButtonsSection() {
  return (
    <>
      <SocialButton link={"#"} title={"Google"} icon={googleIcon} />
      <SocialButton link={"#"} title={"Apple"} icon={appleIcon} />
    </>
  );
}
