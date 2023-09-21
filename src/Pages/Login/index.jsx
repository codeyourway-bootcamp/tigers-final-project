import Navbar from "../../Components/Navbar";
import Form from "../../Components/Form";
import PageContainer from "../../Components/PageContainer";

function Login() {
  return (
    <div>
      <Navbar isTransparent={false} isLandingPage={false} />
      <PageContainer>
        <Form />
      </PageContainer>
    </div>
  );
}

export default Login;
