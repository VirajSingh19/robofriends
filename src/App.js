import React,{Component} from 'react';
// import {robots} from './Robot';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'
import './tachyons.css';
import Scroll from './Scroll';

// States -> Props



class App extends Component{
    constructor(){
        super();
        this.state={
            robots : [],
            searchfield:''
        }
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => {return Response.json();})
        .then(users=>{this.setState({robots:users});});
    }

    onSearchChange = (event) =>{
    this.setState({searchfield:event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
          return  robots.name.toUpperCase().startsWith(this.state.searchfield.toUpperCase());
            // return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })  
        
        if(this.state.robots.length===0)
        {
            return <div><h1>Loading...</h1></div>
        }
        
        else
        {

       
            return(
                <div className='tc'>
                <h1 className='f2'>Robo friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
                </div>);
       }
    }
}


export default App;