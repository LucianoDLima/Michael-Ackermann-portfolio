interface MainWrapperProps {
  children: React.ReactNode
  shrinkWithNavbar: 'shrink' | ''
}

const MainWrapper = ({children, shrinkWithNavbar}: MainWrapperProps) => {
  return (
    <main className={`mainWrapper ${shrinkWithNavbar}`}>{children}</main>
  )
}

export default MainWrapper