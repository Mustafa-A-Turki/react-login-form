import Input from "./Input"

export default function InputSection () {
    return (
        <>
              <Input type={"text"} placeholder={"First name"} />
              <Input type={"text"} placeholder={"Last name"} />
              <Input type={"email"} placeholder={"Email"} />
              <Input type={"password"} placeholder={"Enter your password"} />
        </>
    )
}