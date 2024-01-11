import React from 'react';

interface IProps {
    name: string,
    description: string
}

const SampleBlock = ({name, description}: IProps) => {
    return (
        <section>
            <hr/>
            <div className='py-3'>
                <p className='font-bold'>{name}</p>
                <p className='pl-5'>{description}</p>
            </div>
        </section>
    );
};

export default SampleBlock;
