import React from 'react';
import './App.css';

class List extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          newItem: "",
          list : []
        }
    
    }
  
    addItem(todoValue){
      if(todoValue !== ""){
        const newItem = {
          id: Date.now(),
          value:todoValue,
          isDone:false
        };
        const list = [...this.state.list];
        list.push(newItem);
        this.setState({
          list,
          newItem:""
        });
      }
    }
  
    deleteItem(id){
       const list = [...this.state.list] ;
       const updatedlist = list.filter(item => item.id !==id);
       this.setState({list:updatedlist})
    }

    updateInput(input){
        this.setState({newItem:input});
    }

    render() {
        return (
            <div className="container">
                <p>... Add an Item .....</p>
                <input
                    type="text"
                    className="input-text"
                    placeholder="Write a To-do"
                    required
                    value = {this.state.newItem}
                    onChange = {e=>this.updateInput(e.target.value)}
                />
                <button
                    className="add-btn" 
                    onClick = {()=>this.addItem(this.state.newItem)}
                    disabled = {!this.state.newItem.length}
                    > ADD TO-DO
                </button>
                <div className="list-container">
                    <ul className="list">
                    
                        {this.state.list.map(item => {
                            return(
                                
                                <li key = {item.id}>
                                    <input
                                    type = "checkbox" 
                                    name= "idDone"
                                    checked = {item.isDone}
                                    onChange={() =>{}}
                                    
                                    />
                                    {item.value}
                                    <button
                                        className = "delete-btn"
                                        onClick = {() => this.deleteItem(item.id)}
                                        >
                                        DELETE
                                    </button>
                                </li>
                                
                            );
                        })}
                        <li>
                        <input type="checkbox" name="" id="" />
                        Review codes
                        <button className="delete-btn">DELETE</button>


                        </li>   
                    </ul>

                </div>

            </div>

        );

    }

}
export default List;
