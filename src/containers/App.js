import React, {Component} from 'react';
//da

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import "./App.css";
import Scroll from "../components/Scroll";
import {robots} from "../robots";


let adir = {
    id: 15,
    name: "Adir Tuval",
    username: "Adirt",
    email: "Adir T@theLoser.me",
    address: {
        street: "Ellsworth Summit",
        suite: "Suite 729",
        city: "Aliyaview",
        zipcode: "45169",
        "geo": {
            "lat": "-14.3990",
            "lng": "-120.7677"
        }}};
let count = 0;
// SMART COMPONENT
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
            flag:false

        }

    }

    componentDidMount() {

                fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
            .then(users => this.setState({robots: users})).finally(()=>{
                    this.setState({robots: this.state.robots.concat(adir)})
            });


    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})

    }


    render() {


        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (!this.state.robots.length) ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>

                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
    }

}

export default App;
