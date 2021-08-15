import "./Home.scss";
import { ReactComponent as Investor } from "../../assets/svg/investor.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main className="Home">
      <div className="Home__image-wrapper">
        <Investor className="Home__image" />
      </div>
      <h1 className="Home__heading-primary">Become an investor</h1>
      <p className="Home__description">
        Would you like to quickly and easily increase your capital? Do not
        hesitate and...
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
    </main>
  );
};
