import React from 'react';
import {SignUp} from "@clerk/nextjs";

const Page = () => {
    return (
        <section className='flex h-screen justify-center items-center'>
            <SignUp/>
        </section>
    );
};

export default Page;
