import Footer from "./containers/footer";
import Main from "./containers/main";
import Sidebar from "./containers/sidebar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
      <Footer></Footer>
    </div>
  )
}
