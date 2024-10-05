import {NavBar} from "@/components/ours/Navbar";
import StartPage from "@/components/ours/Start Page/StartPage";
import TextScroll from "@/components/ours/Start Page/TextScroll/page";
import Auth from "@/Auth";
import AuthWrapper from "@/contexts/AuthWrapper";

export default function Home() {
  return (
      <AuthWrapper>
          <div>
              <NavBar/>
              <StartPage/>
              <TextScroll/>
              <Auth/>
          </div>
      </AuthWrapper>

  );
}
