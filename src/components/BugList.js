import React from 'react'
import { useSelector } from 'react-redux'
import BugCard from './BugCard';

const BugList = () => {
    const bugs = useSelector(state => state);
    //console.log(bugs);
    return (
        <div className="container">
            <div className="row">
            Checkout my buglist.
            </div>
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bugs.map(bug => {
                            return <BugCard bug = {bug} key = {bug.id} />
                        })}
                    </tbody>
                </table>
                {/* {bugs.map(bug => {
                    return <BugCard bug = {bug} key = {bug.id} />
                })} */}
            </div>
        </div>
    )
}

export default BugList
