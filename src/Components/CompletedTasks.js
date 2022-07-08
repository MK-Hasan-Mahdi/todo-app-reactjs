import React from 'react';
import { useQuery } from 'react-query';
import CompletedTask from './CompletedTask';

const CompletedTasks = () => {
    const { data: completedTasks, isLoading, refetch } = useQuery("completedTasks", () =>
        fetch(`http://localhost:5000/completedTask`)
            .then(res => res.json()));
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <div className='px-2 md:w-1/2 mx-auto'>
                <h2 className='text-3xl my-3 font-extrabold text-center font-mono'>Completed Tasks</h2>
                <hr className='h-2' />
                <div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Tasks List</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    completedTasks?.map(completedTask => <CompletedTask
                                        key={completedTask._id}
                                        completedTask={completedTask}
                                        refetch={refetch}
                                    ></CompletedTask>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompletedTasks;