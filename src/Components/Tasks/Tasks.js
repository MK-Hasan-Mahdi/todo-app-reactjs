import React, { useState } from 'react';
import { useQuery } from 'react-query';
import swal from 'sweetalert';
import Task from './Task';

const Tasks = () => {
    const { data: tasks, isLoading, refetch } = useQuery('loadTasks', () =>
        fetch('http://localhost:5000/tasks')
            .then(res => res.json()));

    const [updateId, setUpdateId] = useState('');
    return (
        <div className='px-2 md:w-1/2 mx-auto'>
            <h2 className='text-3xl my-3 font-extrabold text-center font-mono'>My TaskList</h2>
            <hr className='h-2' />
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Task List</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks?.map(task => <Task
                                    task={task}
                                    key={task._id}
                                    refetch={refetch}
                                ></Task>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Tasks;