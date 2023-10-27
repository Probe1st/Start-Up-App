import Header from "../ui/Header";
import Members from "./Members";
import Tasks from "./Tasks";


export default function Home() {
    return (
        <div>
            <Header />
            <main id="index">
                <Tasks />
                <Members />
            </main>
        </div>
    )
}