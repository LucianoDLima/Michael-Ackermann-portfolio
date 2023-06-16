import React from 'react'
import IconHome from '../../assets/images/home-icon.svg'
import IconAbout from '../../assets/images/about-icon.svg'
import IconSkill from '../../assets/images/skill-icon.svg'
import IconProject from '../../assets/images/project-icon.svg'
import IconContact from '../../assets/images/contact-icon.svg'

type PageNames = 'Home' | 'About' | 'Skills' | 'Publications' | 'Contact'

interface Pages {
  page: PageNames,
  icon: string,
}

interface NavigationItemsProps {
  tabIndex: -1 | 0
}

const NavigationItems = ({tabIndex}: NavigationItemsProps) => {

  const pages: Pages[] = [
    {
      page: 'Home',
      icon: IconHome,
    },
    {
      page: 'About',
      icon: IconAbout,
    },
    {
      page: 'Skills',
      icon: IconSkill,
    },
    {
      page: 'Publications',
      icon: IconProject,
    },
    {
      page: 'Contact',
      icon: IconContact,
    },
  ];


  const pagesRender: React.ReactNode[] = pages.map((page: Pages) => {
    return (
      <li key={page.page} tabIndex={tabIndex}>
        <div className='page-navigation__icon' style={{background: `url('${page.icon}')`}}/>
        <a>{page.page}</a>
      </li>
    )
  })

  return (
    <nav className='page-navigation'>
      <ul>
        {pagesRender}
      </ul>
    </nav>
  )
}

export default NavigationItems