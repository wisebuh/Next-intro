import EventItem from "./Event-item"
import style from "./event-list.module.css"

function EventList(props ) {
  const {items} = props
  return (
    <ul className={style.list}>
      {items.map((item, index) => (
        <EventItem 
        key = {item.id}
        id={item.id} 
        title={item.title} 
        location={item.location} 
        date={item.date} image={item.image}/>
      ))}
    </ul>
  )
}

export default EventList;