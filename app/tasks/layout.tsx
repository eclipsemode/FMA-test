import Header from "@/components/Header";
import {ReactNode} from "react";
import {auth} from "@clerk/nextjs";
import {redirect} from "next/navigation";

const Layout = ({children}: { children: ReactNode }) => {
    const {userId} = auth();

    if (!userId) {
        redirect('/');
    }

    return (
        <>
            <Header/>
            <main className='innerContainer'>
                {children}
            </main>
        </>
    );
};

export default Layout;
