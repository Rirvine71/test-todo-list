import React from 'react';
import './App.css';
import ListItems from './ListItems';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import moment from 'moment';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[
        {
          id: 5,
          text: "Pet the dogs",
          date: new Date("25/05/2020"),
        },
        {
          id: 2,
          text: "Mow the lawn",
          date: new Date("23/05/2020"),
        },
        {
          id: 23,
          text: "Hoover the floor",
          date: new Date("22/05/2020"),
        },
      ],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    console.log(this.state.startDate)
    const newItem = this.state.currentItem;
    if(newItem.text!==""){
      const items=[...this.state.items, newItem];
      this.setState({
       items: items,
       currentItem:{
         text:'',
         key:'',
         //date: moment().format("L") I inteneded to moment to display and track the dates the user would be inputting the ("L") would lay the date as MMM dd YY
       }
      })
    }
  }
  deleteItem(key){
    const filteredItems = this.state.items.filter(item => 
      item.key!==key);
      this.setState({
        items:filteredItems
      })
  }
  setUpdate(text, key){
    const items = this.state.items;
    items.map(item => {
      if(item.key===key){
        item.text=text;
      }
    })
    this.setState({
      items: items
    })
  }
  handleDateChange(date) {
    this.setState({
      startDate: date
    })
  }
  render(){
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Text"
            value={this.state.currentItem.text}
            onChange={this.handleInput}/>
            <button type="submit" id="submitBtn">Add</button>
            <DatePicker
              selected={ this.state.startDate }
              onChange={ this.handleDateChange }
              name="startDate"
              dateFormat="MM/dd/yyyy"
            /> 
            {/* datepicker component to allow the user to choose a due date to add to their task so they know when it needs to be done by */}
          </form>
        </header>
        <ListItems items = {this.state.items}
        deleteItem = {this.deleteItem}
        setUpdate ={this.setUpdate}>
        </ListItems>
      </div>
    )
  }
} 

export default App;
