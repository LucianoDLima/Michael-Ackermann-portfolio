import ProfileContainer from '../../components/ProfileContainer/ProfileContainer'
import NavigationItems from '../../components/NavigationItems/NavigationItems'
import SocialMedias from '../../components/SocialMedias/SocialMedias'

interface Props {
  navBarHide: string
  tabIndex: number
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