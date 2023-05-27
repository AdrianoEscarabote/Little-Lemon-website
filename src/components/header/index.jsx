import logo from "../../assets/react.svg"

const Header = () => {

  return (
    <header>
      <img src={logo} alt="" />
      <nav>
        <ul>
          <li>
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/">
              About
            </a>
          </li>
          <li>
            <a href="/">
              Menu
            </a>
          </li>
          <li>
            <a href="/">
              Reservations
            </a>
          </li>
          <li>
            <a href="/">
              Order online
            </a>
          </li>
          <li>
            <a href="/">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header