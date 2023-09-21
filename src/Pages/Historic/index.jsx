import Navbar from "../../Components/Navbar";
import HistoricList from "../../Components/HistoricList";
import BottomNavigate from "../../Components/BottonNavigate";
import PageContainer from "../../Components/PageContainer";
function Historic() {
  return (
    <div>
      <Navbar isTransparent={false} isLandingPage={false} />
      <PageContainer>
        <h1>Historic</h1>
        <HistoricList />
        <BottomNavigate />
      </PageContainer>
    </div>
  );
}

export default Historic;
