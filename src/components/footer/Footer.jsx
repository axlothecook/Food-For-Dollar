import './Footer.scss';
import ArrowUp from './svgs/actual component/ArrowUp';
import FacebookIcon from './svgs/actual component/FacebookSvg';
import GithubIcon from './svgs/actual component/GithubSvg';
import InstagramIcon from './svgs/actual component/InstagramSvg';
import PinterestIcon from './svgs/actual component/PinterestSvg';
import TwitterIcon from './svgs/actual component/TwitterSvg';
import YoutubeIcon from './svgs/actual component/YoutubeSvg';
import siteIcon from './svgs/icons/food for dollar transparent.png';

const Footer = () => {
    return <div className="footer-parent-wrapper">
        <div className='footer-child-wrapper'>
            <div className='main-links'>
                <div>
                    <h2>Groceries</h2>
                    <div>
                        <h3>For you</h3>
                        <h3>View All</h3>
                        <h3>Trending</h3>
                        <h3>By Vendor</h3>
                    </div>
                </div>
                <div>
                    <h2>Recipes</h2>
                    <div>
                        <h3>View Suggested</h3>
                        <h3>Customize</h3>
                        <h3>Talk to the Chef</h3>
                    </div>
                </div>
                <div>
                    <h2>Services</h2>
                    <div>
                        <h3>Favourites</h3>
                        <h3>My Orders</h3>
                        <h3>Vendors Nearby</h3>
                        <h3>About</h3>
                    </div>
                </div>
                <div>
                    <h2>Help</h2>
                    <div>
                        <h3>Delivery</h3>
                        <h3>FAQ</h3>
                        <h3>Site Map</h3>
                        <h3>Complaints</h3>
                    </div>
                </div>
                <div>
                    <h2>Contact</h2>
                    <div>
                        <h3>03 1778 1657</h3>
                        <h3>Email</h3>
                        <h3>Chat with us</h3>
                    </div>
                </div>
            </div>
            <div className='social-media-links'>
                <div className='social-media-links-wrapper'>
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <PinterestIcon />
                    <YoutubeIcon />
                    <img src={siteIcon} id='site-icon' />
                </div>
                <div>
                    <div className='arrow-top-wrapper'>
                        <ArrowUp />
                    </div>
                    <h3>Back to Top</h3>
                </div>
            </div>
            <div className='document-links'>
                <h3>@2025 Dollar Food</h3>
                <h3>Privacy Policy</h3>
                <h3>Terms of Service</h3>
                <h3>Refund Policy</h3>
            </div>
            <a className='github-link' href='https://github.com/axlothecook/Food-For-Dollar.git'>
                <GithubIcon />
                <h4>axlothecook</h4>
            </a>
        </div>
    </div>
};

export default Footer;