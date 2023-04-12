interface Props {
  children: JSX.Element
  shrinkWithNavbar: string
}

const MainWrapper = ({children, shrinkWithNavbar}: Props) => {
  return (
    <main className={`mainWrapper ${shrinkWithNavbar}`}>{children}</main>
  )
}

export default MainWrapper