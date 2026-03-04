export default function Input({
  type,
  placeholder,
  value,
  setValue,
  name,
  error,
}) {
  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        id={name}
        style={{
          outline: name === error ? "1px solid red" : "",
        }}
        value={value}
        onChange={(e) => {
          setValue((prev) => {
            return { ...prev, [name]: e.target.value };
          });
        }}
      />
    </>
  );
}
