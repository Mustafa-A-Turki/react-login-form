export  function handleSubmit(updatedValue) {
  if (
    !(
      updatedValue.fName &&
      /^[a-zA-Z ]+$/.test(updatedValue.fName) &&
      updatedValue.fName.length > 4
    )
  ) {
    return {
      success: false,
      field: "fName",
      message:
        "First name must be at least 3 letters and contain only alphabets.",
    };
  } else if (
    !(
      updatedValue.lName &&
      /^[a-zA-Z ]+$/.test(updatedValue.lName) &&
      updatedValue.lName.length > 4
    )
  ) {
    return {
      success: false,
      field: "lName",
      message:
        "Last name must be at least 3 letters and contain only alphabets.",
    };
  } else if (
    !(
      updatedValue.email &&
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(updatedValue.email)
    )
  ) {
    return {
      success: false,
      field: "email",
      message: "Please enter a valid email address (e.g., user@example.com).",
    };
  } else if (
    !updatedValue.password ||
    !/^[A-Za-z0-9_]{8,}$/.test(updatedValue.password)
  ) {
    return {
      success: false,
      field: "password",
      message:
        "Password must be at least 8 characters long and can only contain letters, numbers, and underscores.",
    };
  } else if (!updatedValue.terms) {
    return {
      success: false,
      field: "terms",
      message: "You must agree to the terms and conditions to proceed.",
    };
  } else {
    return { success: true, field: "none", message: "Success!" };
  }
}
