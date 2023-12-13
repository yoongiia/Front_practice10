import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { setCurrentDate } from '../../../../store/dateSlice';

const CurrentDate = ({ currentDate, setCurrentDate }) => {
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentDate(moment().valueOf());
        }, 10000);
    
        return () => clearInterval(interval);
      }, [currentDate, setCurrentDate]);
    
    return (
        <div>
            <p style={{fontSize: "13px", fontWeight: "normal"}}>{currentDate.format("MMM Do YY")}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      currentDate: moment(state.date.date),
    };
  };
  
  const mapDispatchToProps = {
    setCurrentDate,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CurrentDate);
