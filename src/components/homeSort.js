import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import Sort from './sortShedules';

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
               <h2 style={{textAlign: "center"}}>Расписание отсортированное по дате</h2>
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
                    <Sort mySchedules={this.state.scheduler}></Sort>
                    </tbody>
                </table>
           </div>
           
        )
    }
}