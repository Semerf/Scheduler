import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
export default class ScheduleItem extends React.Component{

    constructor(){
        super();
        this.DeleteSchedule = this.DeleteSchedule.bind(this);
        this.state={
            ShowMe:true
        }
    }


    DeleteSchedule(e){
        console.log("Delete Clicked " + this.props.schedule._id);
        axios.delete('http://localhost:4000/scheduler/' + this.props.schedule._id)
        .catch();
        this.setState({
            ShowMe: false
        })
    }

    render(){
        return(
            <>
            {
                this.state.ShowMe?
                <tr>
                <td>{this.props.schedule.title}</td>
                <td>{this.props.schedule.date}</td>
                <td>{this.props.schedule.time}</td>
                {
                    //if()
                }
                <td>{this.props.schedule.descripion}</td>     
                <td><Button variant="secondary" onClick={this.DeleteSchedule} class="btn btn-secondary">Удалить</Button></td>
                <td><Link to={"/edit/" + this.props.schedule._id +"/" + this.props.schedule.title}className="btn btn-danger">Редактировать</Link> </td>
                </tr>
                :null
            }
            </>

        );
    }
}
