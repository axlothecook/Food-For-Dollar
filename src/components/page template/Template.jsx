import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import './Template.scss';

const Template = ({ children }) => {
    return (
        <div className='wrapper-parent'>
            <div className='wrapper-child'>
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    );
};


export default Template;