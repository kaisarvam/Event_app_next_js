import React, { Fragment } from 'react';
import {getAllEvents} from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import {useRouter} from 'next/router';

export default function AllEventPage() {

const events=getAllEvents();
const router = useRouter();


function findEventHandler(year,month){

   router.push(`/events/${year}/${month}`);


}

    return (
        <Fragment>
            <EventsSearch onSearch={findEventHandler}/>
            <EventList items={events}/>
            </Fragment>
    )
}

