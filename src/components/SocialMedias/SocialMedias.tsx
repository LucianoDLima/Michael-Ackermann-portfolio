import React from 'react';
import LogoGH from '../../assets/images/github-logo.svg';
import LogoRG from '../../assets/images/researchgate-logo.svg';
import LogoLI from '../../assets/images/linkedin-logo.svg';

interface SocialMediaList {
  name: string;
  image: string;
  link: string;
}

const SocialMedias = () => {

  const directToLink = (link: string): void => {
    window.open(link, '_blank');
  }

  const socialMediaList: SocialMediaList[] = [
    {
      name: 'Github',
      image: LogoGH,
      link: 'https://github.com/Toktom',
    },
    {
      name: 'Researchgate',
      image: LogoRG,
      link: 'https://www.researchgate.net/profile/Michael-Ackermann-3',
    },
    {
      name: 'Linkedin',
      image: LogoLI,
      link: 'https://www.linkedin.com/in/michael-markus-ackermann/',
    },
  ];

  const socialMediaRender: JSX.Element[] = socialMediaList.map((sm: SocialMediaList) => {
    return (
      <li key={sm.name}>
        <div onClick={() => directToLink(sm.link)}>
          <img src={sm.image} />
        </div>
      </li>
    );
  });

  return <ul className="social-media">{socialMediaRender}</ul>;
};

export default SocialMedias;
