import React from 'react';
import Button from "@/ui/Button";
import {useAppSelector} from "@/store/hooks";

interface IProps {
    sampleInput: string[],
    code: string
}

const TestBlock = ({sampleInput, code}: IProps) => {
    const {isLoading, resultType} = useAppSelector(state => state.assignment);
    return (
        <div className='p-2.5 bg-gray-200 border-[1px] border-[#cbd5e1] flex flex-col gap-2.5'>
            <div className='flex flex-col gap-2.5'>
                <p>Test input:</p>
                <div className='flex gap-1.5 max-xs:flex-col'>
                    <textarea className='flex-1 border-gray-500 border-2 rounded' defaultValue={sampleInput.join(' ')}/>
                    <Button disabled={!code || resultType === 'correct'} isLoading={isLoading}>Запустить код</Button>
                </div>
            </div>
            <div>
                <p>Test output:</p>
                <div className='bg-[#333333] text-white p-1.5 rounded'>Empty result</div>
            </div>

        </div>
    );
};

export default TestBlock;
