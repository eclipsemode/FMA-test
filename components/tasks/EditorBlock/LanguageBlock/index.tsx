import React from 'react';

const LanguageBlock = () => {
    return (
        <div className='flex justify-between items-center flex-wrap gap-1.5'>
            <div>
                <p><span className='font-bold'>Time Limit: </span>8 секунд</p>
                <p><span className='font-bold'>Memory Limit: </span>256 MB</p>
            </div>
            <select name="code" id="code" defaultValue='javascript'
                    className='border-[1px] border-[#cbd5e1] p-1.5 max-xs:w-full'>
                <option value="javascript">Javascript</option>
                <option value="c#">C#</option>
            </select>
        </div>
    );
};

export default LanguageBlock;
