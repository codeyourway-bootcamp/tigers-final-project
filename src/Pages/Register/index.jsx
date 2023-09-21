import Form from "../../Components/Form";
import Navbar from "../../Components/Navbar";
import PageContainer from "../../Components/PageContainer";
function Register() {
  return (
    <div>
      <Navbar isTransparent={false} isLandingPage={false} />
      <PageContainer>
        <h1 style={{ textAlign: "center" }}>Register</h1>
        <Form isRegister={true} />
      </PageContainer>
    </div>
  );
}

export default Register;
