import Input from "./Input"

export default function InputSection ({handleChange, value}) {
    return (
        <>
              <Input type={"text"} placeholder={"First name"} name = {"fName"} value = {value.fName} setValue = {handleChange}/>
              <Input type={"text"} placeholder={"Last name"} name = {"lName"} value = {value.lName} setValue = {handleChange}/>
              <Input type={"email"} placeholder={"Email"} name = {"email"} value = {value.email} setValue = {handleChange}/>
              <Input type={"password"} placeholder={"Enter your password"} name = {"password"} value = {value.password} setValue = {handleChange}/>
        </>
    )
}