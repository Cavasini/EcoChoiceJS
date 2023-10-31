import { Outlet } from "react-router-dom";
import "./assets/index.scss";
import Header from "./components/Header/Header";

function App() {
  return (
    <main>
      <Header sectionIds={["Home", "Features", "Overview", 'FAQ']} />
      <Outlet/>
      {/* <Footer/>  */}
    </main>
  );
}

export default App;
