import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="youtube" target="_new">
          <YoutubeIcon />
        </a>
        <a href="https://www.linkedin.com/in/lucas-silva-pedroso/" target="_new">
          <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com/ls.pedroso/" target="_new">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  )
}

export default Footer;