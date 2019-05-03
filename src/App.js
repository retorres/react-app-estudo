import React, {Component}  from 'react';
import Ninjas from './ninjas'
import AddNinjas from './addninja'

class App extends Component {
  state= {
    ninjas: [
      {name:'Ryu',age: 20, belt:'black', id:1},
      {name:'Ken',age: 15, belt:'green', id:2},
      {name:'Sagat',age: 18, belt:'pink', id:3},
    ]
  }

  addNinja = (ninja)=> {
     ninja.id= Math.random();

     let  ninjas = [...this.state.ninjas, ninja]

     this.setState( { ninjas : ninjas })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja=> { 
      return ninja.id !== id
    })

    this.setState({ninjas : ninjas})


    console.log(id)
  }

  render() {
    return (
      <div className="App">
        <h1>Meu primeiro app</h1>
        <p>aeee</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>

        <AddNinjas addNinjas={this.addNinja}/>
      </div>
    );
  }
}

export default App;
