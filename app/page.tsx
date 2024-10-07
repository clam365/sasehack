import {NavBar} from "@/components/ours/Navbar";
import StartPage from "@/components/ours/Start Page/StartPage";
import TextScroll from "@/components/ours/Start Page/TextScroll/page";
import SignUpSection from "@/components/ours/Start Page/SignUpSection";
import {Footer} from "@/components/ours/Start Page/Footer";
export default function Home() {
  return (
    <div>
        <NavBar/>
        <StartPage/>
        <TextScroll/>
        <SignUpSection/>
        <Footer/>
    </div>
  );
}
