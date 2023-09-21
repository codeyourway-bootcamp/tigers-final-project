import BottomNavigate from "../../Components/BottonNavigate";
import Form from "../../Components/Form";
import Navbar from "../../Components/Navbar";
import PageContainer from "../../Components/PageContainer";
function Login() {
  return (
    <div style={{ display: "flex" }}>
      <Navbar isTransparent={false} isLandingPage={false} />
      <PageContainer>
        <Form />
        <BottomNavigate />
      </PageContainer>
    </div>
  );
}

export default Login;
