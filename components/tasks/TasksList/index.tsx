import React from 'react';
import {ITask} from "@/store/features/task/taskSlice";
import Link from "next/link";

interface IProps {
    taskList: ITask[]
}

const TasksList = ({taskList}: IProps) => {

    const renderTaskList = () => (
        <div className='flex flex-col justify-center items-center p-5 text-white gap-2.5'>
            {
                taskList?.map((task) => (
                    <Link href={`/tasks/${task.taskId}`} key={task.taskId}>
                        <div className='bg-teal-600 rounded p-2.5 w-fit cursor-pointer hover:scale-95'>
                            <p>id: {task.taskId}</p>
                            <p>Задача: {task.task}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )

    return (
        <section className='p-5 flex flex-col items-center'>
            <h2 className='text-black text-xl'>Выберите задачу</h2>
            {renderTaskList()}
        </section>
    )
};

export default TasksList;
