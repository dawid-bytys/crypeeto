import "./Home.scss";
import { useDispatch } from "react-redux";
import { login } from "../../redux/services/auth.service";

export const Home = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="Home"
      onClick={() =>
        dispatch(login({ username: "alberto123", password: "Sraka123!" }))
      }
    ></div>
  );
};
