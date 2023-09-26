import Form from "../../Components/Form";
import Navbar from "../../Components/Navbar";
import PageContainer from "../../Components/PageContainer";
import { Container } from "@chakra-ui/react";
import Footer from "../../Components/Footer";

function Register() {
  return (
    <div>
      <Navbar isTransparent={false} isLandingPage={false} />
      <PageContainer>
        <Container>
          <h1 style={{ textAlign: "center" }}>Register</h1>
          <Form isRegister={true} />
        </Container>
        <Footer simple={true} />
      </PageContainer>
    </div>
  );
}

export default Register;
