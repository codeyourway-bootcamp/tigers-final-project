import Navbar from "../../Components/Navbar";
import Form from "../../Components/Form";
import PageContainer from "../../Components/PageContainer";
import Footer from "../../Components/Footer";
function Login() {
  return (
    <div>
      <Navbar isTransparent={false} isLandingPage={false} />
      <PageContainer>
        <Form />
        <Footer simple={true} />
      </PageContainer>
    </div>
  );
}

export default Login;
