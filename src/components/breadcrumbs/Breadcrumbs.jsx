import './Breadcrumbs.scss';
import LeftArrow from './svgs/components/LeftArrow';
import RightArrow from './svgs/components/RightArrow';

const Breadcrumbs = () => {
    return (
        <div className="breadcrumbs-wrapper">
            <div className="breadcrumbs-go-back">
                <LeftArrow />
                <h2>Go Back</h2>
            </div>
            <div className="breadcrumbs-path">
                <h2>Home</h2>
                <RightArrow />
                <h2>Products</h2>
            </div>
        </div>
    );
};

export default Breadcrumbs;