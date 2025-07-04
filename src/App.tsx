import Header from "./Component/Header";
import Toolbar from "./Component/Toolbor";
import DataTable from "./Component/DataSet";
import "./index.css"
import BottomTabs from "./Component/Footer";
function App() {


  return (
    <>
    {/* <h2 className="bg-red-400 border underline">hello</h2> */}
      <Header />
      <Toolbar/>
      <DataTable/>  
      <BottomTabs/>
    </>
  )
}

export default App
