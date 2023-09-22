import Form from "../../Components/Form";
import Navbar from "../../Components/Navbar";
import "./style.css";
function Login() {

  return (
    <div style={{ display: "flex", flexDirection:"column", justifyContent:"center",alignItems:"center", }}>

        <Navbar isTransparent={false} />
     <div id="pageLogin">
     <Form isLogin={true}/>
     </div>


    </div>
  )
}

export default Login;
//