import {NavBar} from "@/components/ours/Navbar";
import StartPage from "@/components/ours/Start Page/StartPage";
import TextScroll from "@/components/ours/Start Page/TextScroll/page";
import SignUpSection from "@/components/ours/Start Page/SignUpSection";
import {Footer} from "@/components/ours/Start Page/Footer";
import MapPage from "@/components/ours/Map/MapPage";
import FullMapPage from "@/components/ours/Map/FullMapPage";
export default function Home() {
  return (
    <div>
        <NavBar/>
        <StartPage/>
        <TextScroll/>
        <SignUpSection/>
        <Footer/>
        <MapPage/>
    </div>
  );
}
