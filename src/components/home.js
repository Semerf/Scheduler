import React, {Component} from 'react';
import axios from 'axios';
import Schedules from './schedules';

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state = {scheduler: []};
    }

    

    componentDidMount() {
        axios.get('http://localhost:4000/scheduler')
        .then((response)=> {
            this.setState({scheduler: response.data.scheduler})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
           <div>
               <h2 style={{textAlign: "center"}}>Расписание</h2>
               <table className="table table-striped table-hover" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th style={{fontSize: "large", fontStyle: "bold"}} class="text-secondary">Название</th>
                            <th style={{fontSize: "large", fontStyle: "bold"}} class="text-secondary">Дата</th>
                            <th style={{fontSize: "large", fontStyle: "bold"}} class="text-secondary">Время</th>
                            <th style={{fontSize: "large", fontStyle: "bold"}} class="text-secondary">Описание</th>
                            <th style={{fontSize: "large", fontStyle: "bold"}} class="text-secondary">Удалить</th>
                            <th style={{fontSize: "large", fontStyle: "bold"}} class="text-secondary">Редактировать</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    <Schedules mySchedules={this.state.scheduler}></Schedules>
                    </tbody>
                </table>
           </div>
           
        )
    }
}