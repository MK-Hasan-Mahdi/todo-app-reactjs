import React from 'react';
import swal from 'sweetalert';

const Task = ({ task, refetch }) => {
    const handleCompleteTask = (id) => {
        if (id) {
            // console.log(`${id}`);
            fetch(`http://localhost:5000/completeTask/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ isComplete: true }),
                headers: {
                    'Content-type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if (data) {
                        refetch();
                        swal('Task Completed', ' ', "success")
                    }
                });
        }
    }
    return (
        <tr>
            <td>
                <input type="checkbox" onClick={() => handleCompleteTask(task._id)} className='checkbox mr-3' style={{ position: 'relative', top: '7px' }} />{task.taskName}
            </td>
        </tr>
    );
};

export default Task;