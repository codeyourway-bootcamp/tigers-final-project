import Navbar from "../../Components/Navbar";
import BottonNavigate from "../../Components/BottonNavigate";
import PageContainer from "../../Components/PageContainer";

function Charts() {
  return (
    <div>
      <Navbar isTransparent={false} isLandingPage={false} />
      <PageContainer>
        <h1>Charts</h1>
        <BottonNavigate />
      </PageContainer>
    </div>
  );
}

export default Charts;
