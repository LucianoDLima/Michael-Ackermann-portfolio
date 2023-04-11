import React from 'react'
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer'
import NavigationItems from '../../components/NavigationItems/NavigationItems'
import SocialMedias from '../../components/SocialMedias/SocialMedias'

interface NavigationProps {
  navBarHide: string
}

const Navbar = ({navBarHide}: NavigationProps) => {
  return (
    <header className={navBarHide}>
      <ProfileContainer />
      <SocialMedias />
      <NavigationItems />
    </header> 
  )
}

export default Navbar