import { useState } from "react";
import { Link } from "react-router-dom";
import { emailPattern } from "../utils";
import "./register.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(""); // Reset error message when email changes
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage(""); // Reset error message when password changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = FormValidation();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Retrieve data from local storage
    const storedData = JSON.parse(localStorage.getItem("userData"));

    // Check if email and password match the stored data
    if (storedData && storedData.email === email && storedData.password === password) {
      // Clear any previous errors
      setErrors({});
      // Navigate to home page or perform login logic
      window.location.href = "/home"; // Replace '/home' with your home page route
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  const FormValidation = () => {
    const errors = {};
    if (!emailPattern(email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  return (
    <div className="min-h-screen text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl mx-auto text-center">
        <span className="text-2xl font-light">Login to your account</span>
        <div className="relative mt-4 bg-white shadow sm:rounded-lg text-left">
          <div className="h-2  rounded-t-md" />

          <div className="py-6 px-8">
            <label className="block font-semibold">
              Email
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                maxLength={70}
                className="border w-full h-10 px-3 py-2 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                value={email}
                onChange={handleEmailChange}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </label>

            <label className="block mt-3 font-semibold">
              Password
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                maxLength={12}
                className="border w-full h-10 px-3 py-2 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </label>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div className="flex justify-between items-baseline mt-2">
              <button
                className="bg-indigo-500 text-white py-2 px-6 rounded-lg"
                onClick={handleSubmit}
              >
                Login
              </button>
              <Link to="/register" className="text-sm text-indigo-600 hover:underline">
                Create an Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
