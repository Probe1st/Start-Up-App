import Header from "../ui/Header";
import Members from "./Members";
import Tasks from "./Tasks";


export default function Home() {
    return (
        <div>
            <Header />
            <main className="space-x-7" id="index">
                <Tasks />
                <Members />
            </main>
        </div>
    )
}