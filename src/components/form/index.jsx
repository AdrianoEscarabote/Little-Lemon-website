import style from "./style.module.css"
import { useEffect } from "react"

const Form = ({ date, setDate, resTime, setResTime, guests, setGuests, occasion, setOccasion }) => {

  useEffect(() => {
    console.log(date)
    console.log(resTime)
    console.log(guests)
    console.log(occasion)
  }, [date, resTime, guests, occasion])

  return (
    <main>
      <div className={style.container}>

        <form className={style.form}>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.currentTarget.value)} />

          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={resTime} onChange={(e) => setResTime(e.currentTarget.value)}>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input type="number" value={guests} placeholder="1" min="1" max="10" id="guests" onChange={(e) => setGuests(e.currentTarget.value)} />

          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.currentTarget.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input type="submit" value="Make Your reservation" />
        </form>

      </div>
    </main>
  )
}

export default Form