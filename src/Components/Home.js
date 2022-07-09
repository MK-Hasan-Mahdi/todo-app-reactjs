import React, { useState } from 'react';
import { useQuery } from 'react-query';
import add from '../Assets/add.png';
import swal from 'sweetalert';



const Home = () => {
    const { data: tasks, isLoading, refetch } = useQuery('loadTasks', () =>
        fetch('http://localhost:5000/tasks')
            .then(res => res.json()));

    const handleAddTask = (e) => {
        e.preventDefault();
        // console.log('clicked');
        const taskValue = e.target.task.value;
        const tasks = { taskName: taskValue, isComplete: false }
        fetch('http://localhost:5000/addTask', {
            method: 'POST',
            body: JSON.stringify(tasks),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data) {
                    refetch();
                    e.target.task.value = "";
                    swal("Successfully Task Added", "", "success");
                }
            });
    }

    if (isLoading) {
        return <h2>Loading...</h2>
    }

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
        <div>
            <div className='flex items-center mt-12 flex-col'>
                <h3 className='text-3xl font-extrabold mb-2 font-mono'>Add Task</h3>
                <div className="form-control w-full md:w-1/2">
                    <form onSubmit={handleAddTask} className="input-group ">
                        <input type="text" name='task' placeholder="Write task" className="input w-full text-2xl focus:outline-0 input-bordered" />
                        <button type='submit' className="btn btn-square input-bordered bg-white hover:bg-[#F44336] hover:input-bordered">
                            {/* <img src={add} className='w-10 h-10' alt="" /> */}
                            Add Your Task
                        </button>
                    </form>
                </div>
            </div>
            <div className='px-2 md:w-1/2 mx-auto'>
                <h2 className='text-3xl my-3 font-extrabold text-center font-mono'>My TaskList</h2>
                <hr className='h-2' />
                <div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Task List</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tasks?.map(task => {
                                        return <tr key={task._id} className='flex items-center py-2 shadow-md my-2 gap-2'>
                                            <input onClick={() => handleCompleteTask(task._id)} type="checkbox" className="checkbox" /> {task.taskName}
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;