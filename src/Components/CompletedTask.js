import React from 'react';
import swal from 'sweetalert';
import del from '../Assets/delete.png'


const CompletedTask = ({ completedTask, refetch }) => {
    // console.log(completedTask);

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
                    // console.log(data);
                    if (data) {
                        refetch();
                        swal('Task Uncompleted', 'Check your todo list ', "success")
                    }
                });
        }
    }

    const handleDeleteTask = (deleteTask) => {
        // console.log('deleted');
        // const proceedDelete = window.confirm("Are You Sure?");
        swal({
            title: "Are you sure?",
            text: `Delete "${deleteTask.taskName}".`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    if (deleteTask._id) {
                        fetch(`http://localhost:5000/deleteTask/${deleteTask._id}`, {
                            method: 'DELETE',
                            headers: {
                                'content-type': 'application/json'
                            }
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data) {
                                    // console.log(data);
                                    refetch()
                                    swal("Successfully deleted", {
                                        icon: "success",
                                    });
                                }

                            })
                    }

                } else {
                    swal(`"${deleteTask.taskName}" is safe!`);
                }
            });
    }
    return (

        <tr>
            <td>
                <input type="checkbox" onClick={() => handleCompleteTask(completedTask._id)} className="checkbox mr-3" checked style={{ position: "relative", top: "7px" }} />
                <span className='line-through'> {completedTask.taskName}</span>
            </td>

            <td>
                <button onClick={() => handleDeleteTask(completedTask)} className='btn btn-square'><img className='w-8 h-8' src={del} alt="" /></button>
            </td>
        </tr>

    );
};

export default CompletedTask;