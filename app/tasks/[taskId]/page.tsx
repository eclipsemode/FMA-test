import React from 'react';
import IssueBlock from "@/components/tasks/IssueBlock";
import SampleBlock from "@/components/tasks/SampleBlock";
import TaskResultBlock from "@/components/tasks/TaskResultBlock";
import EditorBlock from "@/components/tasks/EditorBlock";
import Link from "next/link";
import {ITask} from "@/store/features/task/taskSlice";
import delay from "@/utils/delay";

export async function getCurrentTask(taskId: string) {
    try {
        const res = await fetch(`${process.env.API}/api/lesson/${taskId}`);


        if (!res.ok) {
            return new Error('Ошибка загрузки задачи.');
        }

        return res.json();
    } catch (e) {
        console.error(e);
    }
}

interface IProps {
    params: {
        taskId: string
    }
}

const Page = async ({params}: IProps) => {
    await delay(2000);
    const task = await getCurrentTask(params.taskId) as ITask;

    return (
        <>
            <div className='p-5'>
                <Link href={'/tasks'} className='linkStyle mb-10 inline-block'>Вернуться ко всем задачам</Link>
                <IssueBlock>Задача: {task.task}</IssueBlock>
                <SampleBlock name='Sample Input' description='8 11'/>
                <SampleBlock name='Sample Output' description='19'/>

                <section
                    className='flex justify-between items-end flex-wrap gap-2.5 max-md:flex-col max-md:items-start'>
                    <p>Напишите программу. Тестируется через stdin → stdout</p>
                    <TaskResultBlock classNameStyle='max-md:w-full' taskId={task.taskId}/>
                </section>
            </div>
            <EditorBlock taskId={params.taskId}/>
        </>
    );
};

export default Page;
