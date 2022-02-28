import { FC } from 'react';
import LinkedinLogo from '../../assets/linkedin.png';
import GithubLogo from '../../assets/github.png';

const Footer: FC = () => {
  return (
    <footer>
      <div className="content">
        <span className="signature">Gabriel Coelho 2022</span>
        <a
          href="https://www.linkedin.com/in/gabriel-coelho-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="logo"
          title="LinkedIn"
        >
          <img src={LinkedinLogo} alt="in" />
        </a>
        <a
          href="https://github.com/userLiev"
          target="_blank"
          rel="noopener noreferrer"
          className="logo"
          title="Github"
        >
          <img src={GithubLogo} alt="git" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
