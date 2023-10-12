import BottomNavigate from "../../Components/BottomNavigate";
import CardProfile from "../../Components/CardProfile";
import Navbar from "../../Components/Navbar";
import PageContainer from "../../Components/PageContainer";
import Footer from "../../Components/Footer";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

function Profile() {
  const pageStyles = {
    backgroundColor: "rgba(238, 237, 237, 0.5)",
    minHeight: "100vh",
  };

  return (
    <div style={pageStyles}>
      <Navbar insTransparent={false} isLandingPage={false} />
      <PageContainer>
        <h1>Profile</h1>
        <BottomNavigate />
        <Footer simple={true} />
      </PageContainer>

      <>
        <CardProfile />
      </>
    </div>
  );
}

export default Profile;
