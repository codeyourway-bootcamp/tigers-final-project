import MainButton from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import "./style.css"
import {AiFillSetting} from "react-icons/Ai"

function Dashboard() {
  return (
<div display={"flex"}>
    <Navbar/> 
    <MainButton onClick={()=>{alert("Botão chamado Dashboard" )}} scheme={"solid"}>Login</MainButton>
    <h1>Dashboard</h1>
    <AiFillSetting size={"50"} color={"blue"}/>
    
</div>
  )
  
}

export default Dashboard;