import AuthLayout from "../Components/AuthLayout"
import ImageSide from '../Components/ImageSide'
import RegisterationForm from "../Components/RegisterationForm"

export default function Register () {
    return (
        <>
            <AuthLayout >
                <ImageSide />
                <RegisterationForm />
            </AuthLayout>
        </>
    )
}