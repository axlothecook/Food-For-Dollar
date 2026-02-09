import { Link } from "react-router";
import './Breadcrumbs.scss';
import LeftArrow from './svgs/components/LeftArrow';
import RightArrow from './svgs/components/RightArrow';

const Breadcrumbs = () => {
    return (
        <div className="breadcrumbs-wrapper">
            <div className="breadcrumbs-go-back">
                <LeftArrow />
                <Link to='/'>
                    <h2>Go Back</h2>
                </Link>
            </div>
            <div className="breadcrumbs-path">
                <Link to='/'>
                    <h2>Home</h2>
                </Link>
                <RightArrow />
                <Link to='/'>
                    <h2>Products</h2>
                </Link>
            </div>
        </div>
    );
};

export default Breadcrumbs;