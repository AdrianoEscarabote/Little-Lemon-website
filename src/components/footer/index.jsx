import style from "./style.module.css"
import logoFooter from "../../assets/footer-logo.png"

const Footer = () => {

  return (
    <footer className={style.footer}>
      <div className={style.container}>

        <img className={style.footerLogo} src={logoFooter} alt="" />

        <div className="col1">
          <h4>Doormat Navigation</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>         
        </div>
        <div className="col2">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="/">2395 Maldove Way.</a>
            </li>
            <li>
              <a href="/">Chicago Illinois</a>
            </li>
            <li>
              <a href="/">(629)-243-6827</a>
            </li>
            <li>
              <a href="/">info@littlelemon.com</a>
            </li>
          </ul>
        </div>

        <div className="col3">
          <h4>Connect</h4>

          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Join us!</a>
            </li>
          </ul>

        </div>

      </div>
    </footer>
  )
}

export default Footer