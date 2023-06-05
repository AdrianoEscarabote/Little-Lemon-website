import logo from "../../assets/Logo.svg"
import restaurantFood from "../../assets/restauranfood.jpg"
import Button from "../shared/button"
import style from "./style.module.css"

const Header = () => {

  return (
    <header className={style.header}>
      <div className={style.container_content}>
        <img src={logo} alt="" />
        <nav>
          <ul className={style.ul}>
            <li>
              <a className={style.a} href="/">
                Home
              </a>
            </li>
            <li>
              <a className={style.a} href="/">
                About
              </a>
            </li>
            <li>
              <a className={style.a} href="/">
                Menu
              </a>
            </li>
            <li>
              <a className={style.a} href="/">
                Reservations
              </a>
            </li>
            <li>
              <a className={style.a} href="/">
                Order online
              </a>
            </li>
            <li>
              <a className={style.a} href="/">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className={style.hero_container}>

        <section className={style.section}>

          <div className={style.text}>
            <h1 className={style.h1}>Little Lemon</h1>
            <p className={style.city}>Chicago</p>
            <p className={style.description}>We are a family owned Mediterraneam restaurant, focused on traditional recipes served with a modern twist.</p>
            <Button label={"Reserve a table"} />
          </div>

          <img className={style.img} src={restaurantFood} alt="" />

        </section>

      </div>
    </header>
  )
}

export default Header