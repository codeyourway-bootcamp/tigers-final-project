import BottomNavigate from "../../Components/BottomNavigate";
import CardProfile from "../../Components/CardProfile";
import Navbar from "../../Components/Navbar";
import PageContainer from "../../Components/PageContainer";
<<<<<<< HEAD
import Footer from "../../Components/Footer";
=======
>>>>>>> 6327b8fb0b7ffb5b35ca35fd3407449bf6404bd0
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import Footer from "../../Components/Footer";

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

