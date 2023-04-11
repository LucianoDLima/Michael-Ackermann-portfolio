import React from 'react'
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer'
import NavigationItems from '../../components/NavigationItems/NavigationItems'
import SocialMedias from '../../components/SocialMedias/SocialMedias'


const Navbar = () => {
  return (
    <header>
      <ProfileContainer />
      <SocialMedias />
      <NavigationItems />
    </header>
  )
}

export default Navbar