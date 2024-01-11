import React from 'react';
import TasksList from "@/components/tasks/TasksList";
import delay from "@/utils/delay";

export async function getTaskList() {
    try {
        const res = await fetch(`${process.env.API}/api/lessons`);

        if (!res.ok) {
            return new Error('Ошибка загрузки списка задач.');
        }

        return res.json();
    } catch (e) {
        console.error(e);
    }
}

export default async function Page() {
    await delay(2000);

    const taskList = await getTaskList();

    return <TasksList taskList={taskList}/>

};
