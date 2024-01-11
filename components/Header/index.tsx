import React, {Suspense} from 'react';
import {ClerkLoading, UserButton} from "@clerk/nextjs";
import AuthButtonLoader from "@/components/skeleton/AuthButtonLoader";

const Header = () => {
    return (
        <header className='bg-zinc-800'>
            <div className='innerContainer flex p-5 justify-between min-h-[72px]'>
                <p className='text-amber-50'>fsa-test</p>
                <ClerkLoading>
                    <AuthButtonLoader/>
                </ClerkLoading>

                <UserButton afterSignOutUrl={'/'}/>
            </div>

        </header>
    );
};

export default Header;
