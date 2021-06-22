import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import { bugAdded } from '../site-helper/actions';
import { useHistory } from 'react-router';
import store from '../site-helper/store';

const AddBug = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [inputField, setInputField] = useState("");
    const changeHandle = (event) => {
        setInputField(inputField => (event.target.value))
    }
    const handleClick = (event) => {
        event.preventDefault();
        if(inputField !== '') {
            dispatch(bugAdded(inputField))
            history.push("/");
        }else {
            alert("Give a name to your bug")
        }
        setInputField(inputField => "");
        
    }
    return (
        <div className = "container mt-3">
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
