import "./Home.scss";
import { ReactComponent as Investor } from "../../assets/svg/investor.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="Home">
      <div className="Home__image-wrapper">
        <Investor className="Home__image" />
      </div>
      <h2 className="Home__heading-secondary">Become an investor</h2>
      <p className="Home__description">
        Do you want to become a legend in the investing history? Do not hesitate
        and...
      </p>
      <div className="Home__buttons-wrapper">
        <Link to="/register" className="Home__join-btn">
          Join Now
        </Link>
        <span className="Home__separator">or</span>
        <Link to="/login" className="Home__login-btn">
          login
        </Link>
      </div>
    </div>
  );
};
