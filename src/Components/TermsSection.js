import Input from "./Input";

export default function TermsSection() {
  return (
    <div className="terms">
      <Input type={"checkbox"} />
      <label htmlFor="checkbox">
        I agree to the
        <a href="#">Terms & Conditions</a>
      </label>
    </div>
  );
}
