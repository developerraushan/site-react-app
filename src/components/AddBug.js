import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import { bugAdded } from '../site-helper/actions';

const AddBug = () => {
    const dispatch = useDispatch();
    const [inputField, setInputField] = useState("");
    const changeHandle = (event) => {
        setInputField(inputField => (event.target.value))
    }
    const handleClick = (event) => {
        event.preventDefault();
        if(inputField !== '') {
            dispatch(bugAdded(inputField))
        }
        setInputField(inputField => "");
    }
    return (
        <div>
            <form onSubmit = {handleClick}>
                <div className = "mb-3">
                    <input type = "text" className = "form-control" placeholder = "Title Name Goes Here" id = "title" name = "title" value = {inputField} onChange = {changeHandle} />
                </div>
                <button type = "submit" className = "btn btn-primary">Add</button>
            </form>
        </div>
    )
}

export default AddBug
