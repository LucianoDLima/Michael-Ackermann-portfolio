import ProfileContainer from '../../components/ProfileContainer'
import NavigationItems from '../../components/NavigationItems'
import SocialMedias from '../../components/SocialMedias'

interface Props {
  navBarHide: 'hide' | ''
  tabIndex: -1 | 0
}

const Navbar = ({navBarHide, tabIndex}: Props) => {
  return (
    <header className={navBarHide}>
      <ProfileContainer />
      <SocialMedias tabIndex={tabIndex}/>
      <NavigationItems tabIndex={tabIndex} />
    </header> 
  )
}

export default Navbar