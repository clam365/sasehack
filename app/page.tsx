import {NavBar} from "@/components/ours/Navbar";
import StartPage from "@/components/ours/Start Page/StartPage";
import TextScroll from "@/components/ours/Start Page/TextScroll/page";
import SignUpSection from "@/components/ours/Start Page/SignUpSection";
import {Footer} from "@/components/ours/Start Page/Footer";
import Auth from "@/Auth";
import AuthWrapper from "@/contexts/AuthWrapper";

export default function Home() {
  return (
      <AuthWrapper>
          <div>
              <NavBar/>
              <StartPage/>
              <TextScroll/>
              <SignUpSection/>
              <Footer/>
              <Auth/>
          </div>
      </AuthWrapper>

  );
}
