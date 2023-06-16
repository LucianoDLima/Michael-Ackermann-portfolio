import React from 'react';
import LogoGH from '../../assets/images/github-logo.svg';
import LogoRG from '../../assets/images/researchgate-logo.svg';
import LogoLI from '../../assets/images/linkedin-logo.svg';

type SocialMediaNames = 'Github' | 'Researchgate' | 'Linkedin'

interface SocialMediaList {
  name: SocialMediaNames;
  image: string;
  link: string;
}

interface SocialMediasProps {
  tabIndex: number
}

const SocialMedias = ({tabIndex}: SocialMediasProps) => {
  // Opens a new tab directing to the link
  const directToLink = (link: string): void => {
    window.open(link, '_blank');
  };

  // Same as above, except it's when you press Enter instead of clicking
  const directToLinkOnKeyDown = (e: React.KeyboardEvent, link: string): void => {
    if (e.key === 'Enter') {
      directToLink(link);
    }
  };

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

  const socialMediaRender: JSX.Element[] = socialMediaList.map(
    (sm: SocialMediaList) => {
      return (
        <li
          key={sm.name}
          tabIndex={tabIndex}
          onKeyDown={(e) => directToLinkOnKeyDown(e, sm.link)}
        >
          <div onClick={() => directToLink(sm.link)}>
            <img src={sm.image} />
          </div>
        </li>
      );
    }
  );

  return <ul className="social-media">{socialMediaRender}</ul>;
};

export default SocialMedias;
