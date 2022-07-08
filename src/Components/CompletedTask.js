import React from 'react';

const CompletedTask = () => {
    return (
        <div>
            <tr key={completedTask._id} className='flex items-center py-2 shadow-md my-2 gap-2'>
                <input type="checkbox" className="checkbox" /> {completedTask.taskName}
            </tr>
        </div>
    );
};

export default CompletedTask;