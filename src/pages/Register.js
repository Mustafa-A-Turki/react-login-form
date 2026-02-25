import AuthLayout from "../Components/AuthLayout";
import ImageSide from "../Components/ImageSide/ImageSide";
import RegisterationForm from "../Components/FormSide/RegisterationForm";

export default function Register() {
  return (
    <>
      <AuthLayout>
        <ImageSide />
        <RegisterationForm />
      </AuthLayout>
    </>
  );
}
