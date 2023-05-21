import React from 'react';
import './footer.css';
import googlePlay from '../../images/play-store.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import facebook from '../../images/social/facebook.png'
import instagram from '../../images/social/instagram.png'
import twitter from '../../images/social/twitter.png'
import linkedin from '../../images/social/linkedin.png'
import github from '../../images/social/github.png'
import developer from '../../images/social/developer-icon.png'

export default function Footer() {

    let newYear = new Date().getFullYear();

    return (
        <>
            <div className="bg-img">
                <div className="social-links">
                    <a href="https://www.facebook.com/niketmishra.niketmishra.3" target='_blank'>
                        <img src={facebook} alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com/mishrank_mkp25675/" target='_blank'>
                        <img src={instagram} alt="insta" />
                    </a>
                    <a href="https://github.com/niketvns" target='_blank'>
                        <img src={github} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/niket-kumar-mishra-37ab5a215/" target='_blank'>
                        <img src={linkedin} alt="linkedin" />
                    </a>
                    <a href="https://twitter.com/Niketmishravns" target='_blank'>
                        <img src={twitter} alt="twitter" />
                    </a>
                </div>
            </div>
            <footer>
                <div className="details">
                    <div className="about">
                        <h3>MetaCart</h3>
                        <p>About Us</p>
                        <p>Browse Product</p>
                        <p>Contact Us</p>
                        <p>FAQs</p>
                    </div>
                    <div className="connect">
                        <h3>Follow Us</h3>
                        <p>LinkedIn</p>
                        <p>Twitter</p>
                        <p>GitHub</p>
                        <p>Instagram</p>
                    </div>
                    <div className="collection">
                        <h3>Collections</h3>
                        <p>Summer 2022</p>
                        <p>Winter 2022</p>
                        <p>Men's Collection</p>
                        <p>Women's Collection</p>
                        <p>Shoes</p>
                    </div>
                    <div className="customer-care">
                        <h3>Customer Care</h3>
                        <p>Order Tracking</p>
                        <p>Privacy Policy</p>
                        <p>Payments and Returns</p>
                        <p>FAQs</p>
                    </div>
                </div>
                <div className="get-app">
                    <div className="icon-text">
                        <img src={googlePlay} alt="" />
                        <p>Get the App</p>
                    </div>
                    <a href='https://niketmishra.me/' className="icon-text" target='_blank'>
                        <img src={developer} alt="" />
                        <p>Developer</p>
                    </a>
                </div>
                <hr />
                <div className="copyright">
                    Copyright &#169; {newYear} | MetaCart
                </div>
            </footer>
        </>
    )
}
