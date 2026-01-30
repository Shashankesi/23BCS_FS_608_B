import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value, allValues) => {
    const v = value ?? allValues[name];
    switch (name) {
      case "name":
        if (!v || !v.trim()) return "Name is required";
        return "";
      case "email":
        if (!v) return "Email is required";
        if (!/\S+@\S+\.\S+/.test(v)) return "Email is invalid";
        return "";
      case "phone": {
        if (!v) return "Phone number is required";
        const digits = v.replace(/[- )(]/g, "");
        if (!/^\+?\d{10,15}$/.test(digits)) return "Phone number is invalid";
        return "";
      }
      case "password":
        if (!v) return "Password is required";
        if (v.length < 6) return "Password must be at least 6 characters";
        return "";
      case "confirmPassword": {
        const pwd = allValues.password || "";
        if (!v) return "Please confirm your password";
        if (v !== pwd) return "Passwords do not match";
        return "";
      }
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => {
      const next = { ...prev, [name]: value };
      // live-validate this field
      const fieldError = validateField(name, value, next);
      setErrors((errs) => ({ ...errs, [name]: fieldError }));
      // if password changed, re-validate confirmPassword
      if (name === "password" && next.confirmPassword) {
        const confErr = validateField("confirmPassword", next.confirmPassword, next);
        setErrors((errs) => ({ ...errs, confirmPassword: confErr }));
      }
      return next;
    });
    setTouched((t) => ({ ...t, [name]: true }));
  };

  const validate = () => {
    let tempErrors = {};
    const allNames = Object.keys(values);
    allNames.forEach((n) => {
      const err = validateField(n, values[n], values);
      if (err) tempErrors[n] = err;
    });
    setErrors(tempErrors);
    // mark all touched
    const allTouched = {};
    allNames.forEach((n) => (allTouched[n] = true));
    setTouched(allTouched);
    return Object.keys(tempErrors).length === 0;
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    validate,
  };
};

export default useForm;
