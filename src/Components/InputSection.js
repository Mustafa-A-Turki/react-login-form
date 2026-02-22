import Input from "./Input"

export default function InputSection ({handlChange, value}) {
    return (
        <>
              <Input type={"text"} placeholder={"First name"} name = {"fName"} value = {value.fName} setValue = {handlChange}/>
              <Input type={"text"} placeholder={"Last name"} name = {"lName"} value = {value.lName} setValue = {handlChange}/>
              <Input type={"email"} placeholder={"Email"} name = {"email"} value = {value.email} setValue = {handlChange}/>
              <Input type={"password"} placeholder={"Enter your password"} name = {"password"} value = {value.password} setValue = {handlChange}/>
        </>
    )
}