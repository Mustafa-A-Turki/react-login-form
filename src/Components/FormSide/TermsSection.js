export default function TermsSection({ handleChange, value }) {
  return (
    <div className="terms">
      <input type={"checkbox"} id="checkbox" checked = {value.terms} onChange = {(e)=>{handleChange((prev)=>{return{...prev, terms:e.target.checked}})}}/>
      <label htmlFor="checkbox">
        I agree to the
        <a href="#">Terms & Conditions</a>
      </label>
    </div>
  );
}
