import React from 'react';
import swal from 'sweetalert';


const CompletedTask = ({ completedTask, refetch }) => {
    const handleCompleteTask = (id) => {
        if (id) {
            // console.log(`${id}`);
            fetch(`http://localhost:5000/completeTask/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ isComplete: false }),
                headers: {
                    'Content-type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if (data) {
                        refetch();
                        swal('Task Uncompleted', 'Check your todo list ', "success")
                    }
                });
        }
    }
    return (
        <div>
            <tr>
                <td>
                    <input type="checkbox" className="checkbox" onClick={() => handleCompleteTask(completedTask._id)} />
                    <span className='line-through'> {completedTask.taskName}</span>
                </td>
            </tr>
        </div>
    );
};

export default CompletedTask;