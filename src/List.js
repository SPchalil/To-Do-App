import React from 'react';
import './App.css';

class List extends React.Component {
    render() {
        return (
            <div className="container">
                Add an Item.....
                <br />
                <input
                    type="text"
                    className="input-text"
                    placeholder="Write a To-do"
                />
                <button
                    className="add-btn" > Add To-do
            </button>
                <div className="list">
                    <ul>
                        <li>
                            <input type="checkbox" name="" id="" />
                        Record youtube videos
                        <button className="delete-btn">Delete</button>


                        </li>
                    </ul>

                </div>

            </div>

        );

    }

}
export default List;
