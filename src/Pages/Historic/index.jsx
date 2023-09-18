import Navbar from "../../Components/Navbar";
import HistoricList from "../../Components/HistoricList";
function Historic() {
  return (
    <div>
      <Navbar isTransparent={false}/>
      <h1>Historic</h1>
      <HistoricList/>
    </div>
  )
}

export default Historic;