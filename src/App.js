import React from 'react';
// import logo from './logo.svg';
import {CardList} from './components/card-list.component'
import './App.css';
import { Searchbox } from './components/search-box.component';
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      monsters:[
        {
          id:1,
          name:'Frankenstein'
        },
        {
          id:2,
          name:'Dracula'
        },
        {
          id:3,
          name:'Zombie'
        }
      ],
      searchText:''
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()
    ).then(users=>this.setState({monsters:users})).catch(()=>{
      console.log('did not connect');
    })
  }
  render() {
    const { monsters,searchText } = this.state;
    const filtereMonster = monsters.filter(
      monster=>monster.name.toLowerCase().includes(searchText.toLowerCase())
    )
    return (
       <div   className='App' >
 
         <Searchbox placeholder={'Search'}
         handleChange={async (e)=>{
          await this.setState({searchText:e.target.value})
          // console.log(this.state.searchText);
        }}
         />
         <CardList searchText={searchText}  monsters={filtereMonster}>
           </CardList>
       </div>
    );
  }
}

export default App;
