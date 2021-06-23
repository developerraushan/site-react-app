import React, {useState} from 'react'
import {connect, useDispatch} from 'react-redux';
import { bugAdded } from '../site-helper/actions';
import { useHistory } from 'react-router';


const AddBug = (props) => {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const [inputField, setInputField] = useState("");
    const changeHandle = (event) => {
        setInputField(inputField => (event.target.value))
    }
    const handleClick = (event) => {
        event.preventDefault();
        if(inputField !== '') {
            dispatch(props.bugAdded(inputField))
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
const mapDispatchToProps = () =>{
    return {
        bugAdded
    }
}
export default connect(mapDispatchToProps) (AddBug);
