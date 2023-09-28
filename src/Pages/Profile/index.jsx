import BottomNavigate from "../../Components/BottomNavigate";
import CardProfile from "../../Components/CardProfile";
import Navbar from "../../Components/Navbar";
import PageContainer from "../../Components/PageContainer";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

function Profile() {
  return (
    
    <div>
    
      <Navbar insTransparent={false} isLandingPage={false} />
      <PageContainer>
        <h1>Profile</h1>
        <BottomNavigate />
        <Footer simple={true} />
      </PageContainer>
      
      <>
    <CardProfile/>
      </>
      

    </div>
    
    
    
  );
}

export default Profile;

