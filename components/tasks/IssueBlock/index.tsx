import React, {ReactNode} from 'react';

interface IProps {
    children: ReactNode
}

const IssueBlock = ({children}: IProps) => {
    return (
        <section>
            <h3 className='py-3'>{children}</h3>
        </section>
    );
};

export default IssueBlock;
