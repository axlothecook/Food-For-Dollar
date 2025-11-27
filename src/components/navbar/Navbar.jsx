import { Link } from "react-router";
import './Navbar.scss';
import logo from './icons/actual icons/food for dollar icon.png';
import UserIcon from './icons/components/UserIcon';
import BasketIcon from "./icons/components/BasketIcon";
import SearchBar from "./search bar/SearchBar";

const Navbar = ({ amount, array, searchQuery }) => {
  return (
    <div className="navbar-wrapper">
      <Link to="/">
        <img src={logo} alt='Logo' />
      </Link>
      <Link to="products/default">
        <div className="hover-effect">
          <h1>Products</h1>
        </div>
      </Link>
      <Link to="recipes/default">
        <div className="hover-effect">
          <h1>Recipe</h1>
        </div>
      </Link>
      <SearchBar array={array} searchQuery={searchQuery} />
      <div className="username-wrapper">
        <UserIcon />
        <div className="username-child">
          <h2>Hello,</h2>
          <h3>John doe</h3>
        </div>
      </div>
      <Link to="cart">
        <div className="cart-wrapper">
          <BasketIcon />
          <h3>{amount}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;