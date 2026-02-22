export default function Input({
  type,
  placeholder,
  value,
  setValue,
  name,
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        id={type}
        value={value}
        onChange={(e) => {
          setValue((prev)=>{
            return {...prev, [name] : e.target.value}
          });
        }}
      />
    </>
  );
}
