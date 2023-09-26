import { FaHome, FaHistory, FaChartBar, FaUser } from "react-icons/fa";
import "./style.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const BottomNavigate = () => {
  return (
    <>
      <div className="bottom-navigate">
        <Link to="/dashboard">
          <div className="nav-item">
            <FaHome size={24} />
            <span>Dashboard</span>
          </div>
        </Link>
        <Link to="/historic">
          <div className="nav-item">
            <FaHistory size={24} />
            <span>Historic</span>
          </div>
        </Link>
        <Link to="/charts">
          <div className="nav-item">
            <FaChartBar size={24} />
            <span>Charts</span>
          </div>
        </Link>
        <Link to="/profile">
          <div className="nav-item">
            <FaUser size={24} />
            <span>Profile</span>
          </div>
        </Link>
      </div>
      <Footer simple={true} />{" "}
    </>
  );
};

export default BottomNavigate;
