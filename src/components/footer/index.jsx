import style from "./style.module.css"

const Footer = () => {

  return (
    <footer>
      <section>
        <div className="img">
          <img src="" alt="" />
        </div>
        <div className="col1">
          <h4>Doormat Navigation</h4>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Menu</a>
          <a href="/">Reservations</a>
          <a href="/">Order Online</a>
          <a href="/">Login</a>
        </div>
        <div className="col2">
          <h4>Contact</h4>
          <a href="/">Address</a>
          <a href="/">phone number</a>
          <a href="/">email</a>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta omnis laboriosam aut autem animi rem ducimus excepturi ex provident?
        <div className="col3">
          <h4>Social Media Links</h4>
          <a href="/">Address</a>
          <a href="/">phone number</a>
          <a href="/">email</a>
        </div>
      </section>
    </footer>
  )
}

export default Footer