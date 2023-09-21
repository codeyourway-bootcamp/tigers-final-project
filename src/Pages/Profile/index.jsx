import BottomNavigate from "../../Components/BottomNavigate";
import Navbar from "../../Components/Navbar";
import PageContainer from "../../Components/PageContainer";
function Profile() {
  return (
    <div>
      <Navbar insTransparent={false} isLandingPage={false} />
      <PageContainer>
        <h1>Profile</h1>
        <BottomNavigate />
      </PageContainer>
    </div>
  );
}

export default Profile;
