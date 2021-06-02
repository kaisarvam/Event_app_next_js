import {Fragment} from 'react'
import {useRouter} from 'next/router';
import {getEventById} from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';


export default function EventDetailPage () {
    const router = useRouter();
    const id = router.query.eventId;
    console.log(id);
    const event = getEventById(id);
    console.log(event);

if(!event)
{
    return (
        <div>
            <h1>No Data Found!!!</h1>
        </div>
    )
}

    else
    return (
       <Fragment>
           <EventSummary title={event.title}/>
           <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
           <EventContent>
               <p>{event.description}</p>
           </EventContent>
       </Fragment>
    )
}
