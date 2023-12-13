import React from 'react';
import moment from 'moment/moment';
import dynamic from 'next/dynamic';
const CurrentDate = dynamic(() => import('./CurrentDate/CurrentDate'), {ssr: false})
const CurrentTime = dynamic(() => import('./CurrentTime/CurrentTime'), {ssr: false})
const DateTime = () => {
    const dateTime = moment();
    return (
        <div style={{marginRight: "30px", alignSelf: "center"}}>
            <CurrentDate dateObj = {dateTime}/>
            <CurrentTime dateObj = {dateTime}/>
        </div>
    );
}

export default DateTime;
