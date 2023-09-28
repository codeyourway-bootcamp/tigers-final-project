import Navbar from "../../Components/Navbar";
import HistoricList from "../../Components/HistoricList";
import BottomNavigate from "../../Components/BottomNavigate";
import PageContainer from "../../Components/PageContainer";
import Footer from "../../Components/Footer";
function Historic() {
  return (
    <div>
      <Navbar isTransparent={false} isLandingPage={false} />
      <PageContainer>
        <HistoricList />
        <BottomNavigate />
      </PageContainer>
      <Footer simple={true} />
    </div>
  );
}

export default Historic;
