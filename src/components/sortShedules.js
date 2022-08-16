//sort(){
 //   

import React from 'react';
import '../App.css';
import ScheduleItem from './scheduleitem';

class SortSchedules extends React.Component{
  render(){
    let data = this.props.mySchedules.sort(function(a, b) {
        return ((a.date === b.date) ? 0 : ((a.date > b.date) ? 1 : -1));
    });
    return data.map((schedule)=>{
        console.log({schedule});
        return<ScheduleItem key={schedule._id} schedule={schedule}></ScheduleItem>
        
    });
  }
}

export default SortSchedules;