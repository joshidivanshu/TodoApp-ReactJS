import React, { useState } from 'react';
import TodoList from './TodoList';



const App = () => {

    const [inputList, setInputList] = useState("");
    const[items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = (event) => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    };

    const deleteItems = (id) => {
        console.log('deletion successful!!');
        setItems((oldItems) => {
            return oldItems.filter((arrEl, index) => {
                return index !== id;
            })
        })
    };

    
    
    return(
        <div className="main_div">
            <div className="center_div">
                <br></br>
                <h1> To do List</h1>
                <br></br>
                <input type="text" placeholder="Add an Item" onChange={itemEvent} value={inputList}/>
                <button onClick={listOfItems}> + </button>

                <ol>
                    {items.map((itemval,index) => {
                       return <TodoList 
                        key={index}
                        id={index} 
                        text={itemval} 
                        onSelect = {deleteItems}
                        />;
                    })}
                </ol>
            </div>
        </div>
    )
};


export default App;