import Link from 'next/link';
import Button from "@/ui/button"
import classes from "./event-item.module.css"

export default function EventItem(props) {
    const {title, image, date, location, id} = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day:"numeric",
        month:"long",
        year:"numeric"
    });

    const formattedAddress = location.replace(', ', '\n')
    const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
        <img src={`/${image}`} alt={title}/>
        <div className={classes.content}>
            <div>
                <h2>{title}</h2>
            <div>
                <time>{humanReadableDate}</time>
            </div>
            <div>
                    
                <address>&#8982; {formattedAddress}</address>
            </div>
            </div>
            <div>
                <Button link={exploreLink}>
                    <span>Explore Event</span>
                    <span className={classes.icon}>&rArr;</span>
                </Button>
            </div>
        </div>
    </li>
  )
}
