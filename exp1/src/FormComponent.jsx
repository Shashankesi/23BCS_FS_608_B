import React, { useEffect, useState } from "react";
import useForm from "./useForm";
import "./FormComponent.css";

const computePasswordStrength = (pw) => {
  if (!pw) return { score: 0, label: "" };
  let score = 0;
  if (pw.length >= 6) score++;
  if (pw.length >= 10) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  const label = score <= 1 ? "Weak" : score <= 3 ? "Medium" : "Strong";
  return { score, label };
};

const FormComponent = () => {
  const { values, errors, touched, handleChange, validate } = useForm({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [pwStrength, setPwStrength] = useState({ score: 0, label: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setPwStrength(computePasswordStrength(values.password));
  }, [values.password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      console.log("Form Data:", values);
      // keep a short success banner then clear
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const hasErrors = Object.values(errors).some((v) => v);
  const isEmpty = !values.name || !values.email || !values.phone || !values.password || !values.confirmPassword;

  return (
    <div className="form-wrapper">
      <form className="reg-form" onSubmit={handleSubmit} noValidate>
        <h2>Register</h2>

        {submitted && <div className="success">Registration successful!</div>}

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Full name"
            className={errors.name && touched.name ? "invalid" : ""}
            aria-invalid={!!errors.name}
          />
          {errors.name && touched.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-row">
          <div className="form-group small">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={errors.email && touched.email ? "invalid" : ""}
              aria-invalid={!!errors.email}
            />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group small">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="+1234567890"
              className={errors.phone && touched.phone ? "invalid" : ""}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && touched.phone && <p className="error">{errors.phone}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group small">
            <label>Password</label>
            <div className="pw-wrap">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Create a password"
                className={errors.password && touched.password ? "invalid" : ""}
                aria-invalid={!!errors.password}
              />
              <button
                type="button"
                className="pw-toggle"
                onClick={() => setShowPassword((s) => !s)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && touched.password && <p className="error">{errors.password}</p>}
            <div className="strength">
              <div className={`strength-bar s-${Math.min(pwStrength.score, 4)}`} />
              <div className="strength-label">{pwStrength.label}</div>
            </div>
          </div>

          <div className="form-group small">
            <label>Confirm Password</label>
            <div className="pw-wrap">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="Repeat password"
                className={errors.confirmPassword && touched.confirmPassword ? "invalid" : ""}
                aria-invalid={!!errors.confirmPassword}
              />
              <button
                type="button"
                className="pw-toggle"
                onClick={() => setShowConfirm((s) => !s)}
                aria-label="Toggle confirm password visibility"
              >
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={isEmpty || hasErrors}>
          {isEmpty ? "Fill all fields" : hasErrors ? "Fix errors" : "Create account"}
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
