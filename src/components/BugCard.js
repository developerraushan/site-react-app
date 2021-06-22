import React from 'react';

const BugCard = (props) => {
    return (
        <tr >
            <td>{props.bug.id}</td>
            <td>{props.bug.description}</td>
        </tr>
    )
}

export default BugCard
