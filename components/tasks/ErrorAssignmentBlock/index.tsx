import React, {useState} from 'react';

const ErrorAssignmentBlock = () => {
    const [hidden, setHidden] = useState<boolean>(false);

    const renderVisibleResult = () => (
        <>
            <div>
                <p>Test input:</p>
                <p>8 11</p>
            </div>

            <div>
                <p>Test output:</p>
                <p>19</p>
            </div>

            <div>
                <p>Your code output:</p>
                <p></p>
            </div>

            <div>
                <p className='linkStyle'
                   onClick={() => setHidden(!hidden)}>Свернуть</p>
            </div>
        </>
    )

    const renderHiddenResult = () => (
        <>
            <p>...</p>
            <div>
                <p className='underline text-blue-500 cursor-pointer w-fit hover:opacity-80'
                   onClick={() => setHidden(!hidden)}>Свернуть</p>
            </div>
        </>
    )

    const renderCloseLogo = () => (
        <div className="bg-red-500 text-white w-8 h-8 min-w-8 font-bold rounded-full flex justify-center items-center">
            X
        </div>
    )

    return (
        <div className='flex flex-col gap-2.5'>
            <div className='flex items-center gap-2.5 relative'>
                {renderCloseLogo()}
                <p>Пока неверно. Ошибки - наши лучшие учителя!</p>
            </div>
            <div className='bg-[#333333] rounded p-2.5 text-white flex flex-col gap-2.5'>
                <p>Failed test #1 of 5. Wrong answer</p>
                <p>This is a sample test from the problem statement!</p>

                {hidden ? renderHiddenResult() : renderVisibleResult()}
            </div>
        </div>
    );
};

export default ErrorAssignmentBlock;
