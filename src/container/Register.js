import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  validatePassword,
  validateEmail,
  validateField,
} from "../utils";
import "./register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    const value = e.target.value;
    setErrors({ ...errors, name: "" });
    const cleanedValue = value.trimStart().replace(/ +/g, " ");
    setName(cleanedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Save data to local storage
    localStorage.setItem(
      "userData",
      JSON.stringify({ name, email, password })
    );

    // Navigate to login page
    navigate("/login");
  };

  const validateForm = () => {
    const errors = {};

    validateField(name, "name", "Name cannot be empty", errors);
    validateEmail(email, errors);
    validatePassword(password, confirmPassword, errors);

    return errors;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      <div className="shadow w-96 p-4 rounded-md bg-clip-padding  backdrop-filter backdrop-blur-sm bg-opacity-10 bg-white">
        <div className="p-3">
          <label htmlFor="name" className="block mb-1 font-semibold text-left">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="outline-none py-2 pr-4 block w-full"
            placeholder="Full Name"
            value={name}
            onChange={handleNameChange}
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
        </div>
        <div className="p-3">
          <label htmlFor="email" className="block mb-1 font-semibold text-left">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="outline-none py-2 pr-4 block w-full"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>
        <div className="p-3">
          <label htmlFor="password" className="block mb-1 font-semibold text-left">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="outline-none py-2 pr-4 block w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="text-red-500">{errors.password}</span>}
        </div>
        <div className="p-3">
          <label htmlFor="confirmPassword" className="block mb-1 font-semibold text-left">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="outline-none py-2 pr-4 block w-full"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword}</span>}
        </div>
        <div className="p-3 pt-4">
          <button
            type="button"
            className="w-full text-black py-2 pr-4 border-2 border-blue-600 rounded-lg px-3 py-2 cursor-pointer hover:bg-blue-600 hover:text-blue-200"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
