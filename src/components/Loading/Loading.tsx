import "./Loading.scss";
import { ReactComponent as Spinner } from "../../assets/svg/spinner.svg";

const Loading = () => {
  return (
    <div className="Loading">
      <Spinner className="Loading__spinner" />
    </div>
  );
};

export default Loading;
