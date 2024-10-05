import {NavBar} from "@/components/ours/Navbar";
import StartPage from "@/components/ours/Start Page/StartPage";
import TextScroll from "@/components/ours/Start Page/TextScroll/page";
export default function Home() {
  return (
    <div>
        <NavBar/>
        <StartPage/>
        <TextScroll/>
    </div>
  );
}
