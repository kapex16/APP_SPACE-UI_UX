import './style.css'
import Logo from '../../asset/LOGO.svg'
import FBLogo from '../../asset/FB.svg'
import IGLogo from '../../asset/INSTA.svg'
import TWLogo from '../../asset/TWIT.svg'



function Footer () {
    return (
        <div className="footer-container">
            <div className="content-container">
                <img src={Logo} alt="logo" className="logo"></img>
                <p className="text roboto">Viajar en el tiempo nunca fue tan fácil</p>
                <div>
                    <a className= "social-media" href="https://es-es.facebook.com/" target="_blank" rel="noreferrer"><img src={FBLogo} alt="facebook"></img></a>
                    <a className= "social-media" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={IGLogo} alt="instagram"></img></a>
                    <a className= "social-media" href="https://twitter.com/" target="_blank" rel="noreferrer"><img src={TWLogo} alt="twitter"></img></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;