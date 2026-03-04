import Input from "./Input";
import ErrorMessage from "../../ErrorMessage";

export default function InputSection({ handleChange, value, error }) {
  return (
    <>
      <Input
        type={"text"}
        placeholder={"First name"}
        name={"fName"}
        value={value.fName}
        setValue={handleChange}
        error = {error.field}
      />
      {error.field === "fName" && <ErrorMessage errorMessage={error.message} />}
      <Input
        type={"text"}
        placeholder={"Last name"}
        name={"lName"}
        value={value.lName}
        setValue={handleChange}
        error = {error.field}
      />
      {error.field === "lName" && <ErrorMessage errorMessage={error.message} />}
      <Input
        type={"email"}
        placeholder={"Email"}
        name={"email"}
        value={value.email}
        setValue={handleChange}
        error = {error.field}

      />
      {error.field === "email" && <ErrorMessage errorMessage={error.message} />}
      <Input
        type={"password"}
        placeholder={"Enter your password"}
        name={"password"}
        value={value.password}
        setValue={handleChange}
        error = {error.field}

      />
      {error.field === "password" && (
        <ErrorMessage errorMessage={error.message} />
      )}
    </>
  );
}
