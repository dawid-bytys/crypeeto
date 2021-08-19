import "./Register.scss";
import { useState } from "react";
import { ReactComponent as BackWave } from "../../assets/svg/backwave.svg";
import { ReactComponent as FrontkWave } from "../../assets/svg/frontwave.svg";
import { ReactComponent as BackCircle } from "../../assets/svg/backcircle.svg";
import { ReactComponent as FrontCircle } from "../../assets/svg/frontcircle.svg";
import { register } from "../../redux/services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthorization } from "../../redux/store";

interface Credentials {
  first_name: "";
  last_name: "";
  username: "";
  password: "";
  confirm_password: "";
  email: "";
}

const initialState: Credentials = {
  first_name: "",
  last_name: "",
  username: "",
  password: "",
  confirm_password: "",
  email: "",
};

export const Register = () => {
  const [credentials, setCredentials] = useState<Credentials>(initialState);

  const { registration } = useSelector(selectAuthorization);

  const dispatch = useDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(credentials));
  };

  return (
    <div className="Register">
      <form className="Register__form" onSubmit={handleSubmit}>
        <div
          className={
            registration === "pending"
              ? "Register__input-wrapper Register__input-wrapper--disabled"
              : "Register__input-wrapper"
          }
        >
          <input
            type="text"
            className="Register__input"
            id="firstName"
            name="first_name"
            onChange={handleInput}
            required
          />
          <label htmlFor="firstName" className="Register__label">
            First Name
          </label>
        </div>
        <div
          className={
            registration === "pending"
              ? "Register__input-wrapper Register__input-wrapper--disabled"
              : "Register__input-wrapper"
          }
        >
          <input
            type="text"
            className="Register__input"
            id="lastName"
            name="last_name"
            onChange={handleInput}
            required
          />
          <label htmlFor="lastName" className="Register__label">
            Last Name
          </label>
        </div>
        <div
          className={
            registration === "pending"
              ? "Register__input-wrapper Register__input-wrapper--disabled"
              : "Register__input-wrapper"
          }
        >
          <input
            type="text"
            className="Register__input"
            id="username"
            name="username"
            onChange={handleInput}
            required
          />
          <label htmlFor="username" className="Register__label">
            Username
          </label>
        </div>
        <div
          className={
            registration === "pending"
              ? "Register__input-wrapper Register__input-wrapper--disabled"
              : "Register__input-wrapper"
          }
        >
          <input
            type="password"
            className="Register__input"
            id="password"
            name="password"
            onChange={handleInput}
            required
          />
          <label htmlFor="password" className="Register__label">
            Password
          </label>
        </div>
        <div
          className={
            registration === "pending"
              ? "Register__input-wrapper Register__input-wrapper--disabled"
              : "Register__input-wrapper"
          }
        >
          <input
            type="password"
            className="Register__input"
            id="confirmPassword"
            name="confirm_password"
            onChange={handleInput}
            required
          />
          <label htmlFor="confirmPassword" className="Register__label">
            Confirm Password
          </label>
        </div>
        <div
          className={
            registration === "pending"
              ? "Register__input-wrapper Register__input-wrapper--disabled"
              : "Register__input-wrapper"
          }
        >
          <input
            type="text"
            className="Register__input"
            id="email"
            name="email"
            onChange={handleInput}
            required
          />
          <label htmlFor="email" className="Register__label">
            E-Mail
          </label>
        </div>
        <div
          className={
            registration === "pending"
              ? "Register__submit-wrapper Register__submit-wrapper--disabled"
              : "Register__submit-wrapper"
          }
        >
          <button type="submit" className="Register__submit">
            Register
          </button>
        </div>
      </form>
      <BackCircle className="Register__back-circle " />
      <FrontCircle className="Register__front-circle" />
      <BackWave className="Register__back-wave" />
      <FrontkWave className="Register__front-wave" />
    </div>
  );
};
