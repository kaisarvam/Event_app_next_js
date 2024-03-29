import {Fragment} from 'react'
import {useRouter} from 'next/router';
import {getFilteredEvents} from '../../dummy-data';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

export default function FilteredEventPage() {

    const router = useRouter();

   const filterData = router.query.slug;

   console.log(filterData);


   if(!filterData)
   {
       return (
           <Fragment>
               <ErrorAlert>
               <p> Filtered Event is empty !!!</p>
               </ErrorAlert>
           <div className='center'>
              <Button link='/events'> Show All Events </Button>
           </div>
           </Fragment>
       )
   }
 

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    //converting url string data to number data

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    

    if (isNaN(numYear)||
     isNaN(numMonth) || 
     numYear>2022 || 
     numYear<2019 ||
     numMonth<1||
     numMonth>12)
     {
    
    return(
      
         <Fragment>
             <ErrorAlert>
         <p>Invalid filter please recheck your values!!!</p>
         </ErrorAlert>
     <div className="center">
        <Button link='/events'> Show All Events </Button>
     </div>
     </Fragment>
    )}


    const filteredEvents = getFilteredEvents (
        {
        year:numYear,
        month: numMonth,
        }
    );

if(!filteredEvents || filteredEvents.length===0)
{

    return (
        
             <Fragment>
                 <ErrorAlert>
             <p>No Event Found On This Selected Date !!!</p>
             </ErrorAlert>
         <div className='center'>
            <Button link='/events'> Show All Events </Button>
         </div>
         </Fragment>

        
    )
}


 else  {
     const date = new Date(numYear,numMonth-1);
    return (
        <Fragment>

            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}/>

            </Fragment>
      
    )

   }
}
