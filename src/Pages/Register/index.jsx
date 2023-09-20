import Form from "../../Components/Form";
import Navbar from "../../Components/Navbar";
function Register() {
  return (
    <div>
      <Navbar isTransparent={false} isLandingPage={false}/>
      <h1 style={{ textAlign: "center" }}>Register</h1>
      <Form isRegister={true} />
    </div>
  );
}

export default Register;
