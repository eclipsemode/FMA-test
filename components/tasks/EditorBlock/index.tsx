'use client'
import React, {useState} from 'react';
import AceEditor from "react-ace";
import Button from "@/ui/Button";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import ErrorAssignmentBlock from "../ErrorAssignmentBlock";
import {resetAssignment, submitAnAssignment} from "@/store/features/assignment/assignmentSlice";
import "ace-builds/src-noconflict/mode-java";
import LanguageBlock from "@/components/tasks/EditorBlock/LanguageBlock";
import TestBlock from "@/components/tasks/EditorBlock/TestBlock";
import {useAuth} from "@clerk/nextjs";

interface IProps {
    taskId: string
}

const EditorBlock = ({taskId}: IProps) => {
    const {userId} = useAuth();
    const [code, setCode] = useState<string>('');
    const [testBlockEnabled, setTestBlockEnabled] = useState<boolean>(false);
    const {resultType, isLoading} = useAppSelector(state => state.assignment);
    const dispatch = useAppDispatch();

    const onRunningCodeFirstClickEvent = () => {
        if (!testBlockEnabled) {
            setTestBlockEnabled(true);
        }
    }

    const onSend = () => {
        if (confirm('Отправить задание?')) {
            console.log(code);

            if (userId) {
                dispatch(submitAnAssignment({
                    userId,
                    code,
                    lessonId: taskId
                }));
            }
        }
    }

    const onReset = () => {
        if (confirm('Сбросить текущее задание?')) {
            dispatch(resetAssignment());
        }
    }

    const renderHint = () => (
        <div className='bg-amber-100 p-2.5 rounded mb-5'>
            <p><span className='linkStyle'
                     onClick={onRunningCodeFirstClickEvent}>Попробуйте протестировать свой код</span> с произвольными
                входными данными!</p>
        </div>
    )

    return (
        <>
            {resultType === 'incorrect' && (
                <section className='p-5'>
                    <ErrorAssignmentBlock/>
                </section>
            )}
            <section
                className={`p-5 ${resultType === 'correct' ? 'bg-green-100' : resultType === 'incorrect' ? 'bg-red-100' : null}`}>
                {resultType === 'incorrect' && renderHint()}
                <LanguageBlock/>

                <AceEditor
                    value={code}
                    className='ace_editor'
                    placeholder='Write your code here...'
                    style={{width: '100%', height: '200px', border: '1px solid #cbd5e1', marginTop: '20px'}}
                    onChange={setCode}
                    mode='java'
                    name="editor"
                    editorProps={{$blockScrolling: true}}
                />

                {testBlockEnabled && <TestBlock sampleInput={['8', '11']} code={code}/>}

                <div className='mt-5 flex justify-between flex-wrap gap-2.5 max-xs:flex-col-reverse'>
                    <div className='flex gap-2.5'>
                        <Button bgColor='success' disabled={!code || resultType === 'correct'} isLoading={isLoading}
                                clickEvent={onSend}>Отправить</Button>
                        {resultType &&
                            <Button bgColor='reset' classNameStyle='flex-1' isLoading={isLoading}
                                    clickEvent={onReset}>Сбросить</Button>}
                    </div>

                    {!testBlockEnabled &&
                        <Button clickEvent={onRunningCodeFirstClickEvent} isLoading={isLoading}
                                disabled={!code || resultType === 'correct'}>Запустить
                            код</Button>}
                </div>

                {resultType === 'correct' && <p className='mt-5'>Поздравляем! Вы решили задание.</p>}
            </section>
        </>
    );
};

export default EditorBlock;
