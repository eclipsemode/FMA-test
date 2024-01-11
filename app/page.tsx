import {auth, SignIn} from "@clerk/nextjs";
import {redirect} from "next/navigation";

export default async function Home() {
    const {userId} = auth();
    if (userId) {
        redirect('/tasks');
    }
    return (
        <main className="flex h-screen justify-center items-center">
            <SignIn/>
        </main>
    )
}
