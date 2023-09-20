import Form from "../../Components/Form";
import Navbar from "../../Components/Navbar";
function Login() {
  return (
    <div style={{ display: "flex" }}>
      <Navbar isTransparent={false} isLandingPage={false} />
      <Form />
    </div>
  );
}

export default Login;
