import React,{Component} from 'react';
import {robots} from './Robot';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'
import './tachyons.css';
// States -> Props



class App extends Component{
    constructor(){
        super();
        this.state={
            robots : robots,
            searchfield:''
        }
    }

    onSearchChange = (event) =>{
    this.setState({searchfield:event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
          return  robots.name.toUpperCase().startsWith(this.state.searchfield.toUpperCase());
            // return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })    
        return(
             <div className='tc'>
            <h1>Robo friends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <CardList robots={filteredRobots} />
            </div>);
    }
}


export default App;