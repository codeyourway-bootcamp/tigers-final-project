import BottomNavigate from "../../Components/BottomNavigate";
import Navbar from "../../Components/Navbar";
import PageContainer from "../../Components/PageContainer";
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
    </div>
  );
}

export default Profile;
