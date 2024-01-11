'use client'
import React, {HTMLAttributes, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {getCountOfAssignments} from "@/store/features/assignment/assignmentSlice";

interface IProps {
    taskId: string,
    classNameStyle?: HTMLAttributes<'div'>['className']
}

const TaskResultBlock = ({classNameStyle, taskId}: IProps) => {
    const dispatch = useAppDispatch();
    const {attemptsInfo} = useAppSelector(state => state.assignment);

    useEffect(() => {
        dispatch(getCountOfAssignments(taskId));
    }, []);

    return (
        <div className={`flex-col gap-x-2.5 bg-emerald-100 py-3 px-4 w-fit rounded ${classNameStyle}`}>
            <p>Верно решили <span className='font-bold'>{attemptsInfo?.isCorrectUsersAmount || 0}</span> учащихся</p>
            <p>Из всех попыток <span className='font-bold'>{attemptsInfo?.isCorrectPercent || 0}%</span> верных</p>
        </div>
    );
};

export default TaskResultBlock;
