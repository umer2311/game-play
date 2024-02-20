export const hasOnlyWhiteSpace = (str) => {
    return !str?.trim();
  };
  
  export const validateEmail = (email, errors) => {
    if (!email || !email.includes("@") || !email.includes(".com")) {
      errors.email = "Invalid email address.";
    } else if (hasOnlyWhiteSpace(email)) {
      errors.email = "Email cannot be empty";
    }
  };
  
  export const validatePassword = (password, confirmPassword, errors) => {
    if (!passwordPattern(password)) {
      errors.password = "Password must contain at least one special character, one uppercase letter, one number, and at least 8 characters long.";
    }
    if (hasOnlyWhiteSpace(confirmPassword)) {
      errors.confirmPassword = "Password cannot be empty";
    }
    if (hasOnlyWhiteSpace(password)) {
      errors.password = "Password cannot be empty";
    }
    if (!hasOnlyWhiteSpace(confirmPassword) && confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match.";
      errors.password = "Passwords do not match.";
    }
  };
  
  export const validateField = (fieldValue, fieldName, errorMessage, errors) => {
    if (!fieldValue || hasOnlyWhiteSpace(fieldValue)) {
      errors[fieldName] = errorMessage;
    }
  };
  

  
  
  
  export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  export const handleNameChange = (
    formData,
    setFormData,
    setErrors,
    errors,
    fieldName,
    e
  ) => {
    const { value } = e.target;
    setErrors({ ...errors, [fieldName]: "" });
    // Check if the entered value is a valid string (only letters and spaces)
    const isValidString = /^[a-zA-Z\s]*$/.test(value);
  
    if (isValidString) {
      // Trim spaces from the beginning and end, replace consecutive spaces with a single space
      const cleanedValue = value.trimStart().replace(/ +/g, " ");
  
      // Capitalize the cleaned value
      const capitalizedValue = capitalizeFirstLetter(cleanedValue);
  
      setFormData({
        ...formData,
        [fieldName]: capitalizedValue,
      });
    }
  };
  
  export const emailPattern = (email) => {
    const trimmedEmail = email.trim(); // Remove leading and trailing spaces
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@0-9]{2,}$/;
    return trimmedEmail.match(emailPattern);
  };
  
  export const passwordPattern = (password) => {
    // Password pattern with disallowance of spaces
    const passwordPattern = /^(?=.*[!@#$%^&*?])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
  
    return password.match(passwordPattern);
  };
  