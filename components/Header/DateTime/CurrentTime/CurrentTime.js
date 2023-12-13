import moment from 'moment';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCurrentDate } from '../../../../store/dateSlice';

const CurrentTime = ({ currentTime, setCurrentDate }) => {
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentDate(moment().valueOf());
        }, 1000);
    
        return () => clearInterval(interval);
      }, [currentTime, setCurrentDate]);

    return (
        <div>
            <p style={{fontSize: "13px", fontWeight: "normal"}}>{currentTime.format('LTS')}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      currentTime: moment(state.date.date),
    };
  };
  
  const mapDispatchToProps = {
    setCurrentDate,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CurrentTime);
