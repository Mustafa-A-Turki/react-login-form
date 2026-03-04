import ErrorMessage from "../ErrorMessage";

export default function TermsSection({ handleChange, value, error }) {
  return (
    <div className="terms">
      <input
        type={"checkbox"}
        style={{
          outline: "terms" === error.field ? "1px solid red" : ""
        }}
        name="terms"
        id="checkbox"
        checked={value.terms}
        onChange={(e) => {
          handleChange((prev) => {
            return { ...prev, terms: e.target.checked };
          });
        }}
      />
      <label htmlFor="checkbox">
        I agree to the
        <a href="#">Terms & Conditions</a>
      </label>
      {error.field === "terms" && <ErrorMessage errorMessage={error.message} />}
    </div>
  );
}
