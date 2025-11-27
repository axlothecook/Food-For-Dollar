import { Link } from "react-router";
import './ErrorPage.scss';
import errorGIF from './gif/Animated GIF.gif';

const ErrorPage = () => {
  return (
    <div className="error-page-wrapper">
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">
        <h3>You can go back to the home page by clicking here, though!</h3>
      </Link>
      <img src={errorGIF} alt='Error has occured loading the webpage' />
    </div>
  );
};

export default ErrorPage;