import { FaHome, FaHistory, FaChartBar, FaUser } from 'react-icons/fa';
import './style.css';

const BottomNavigate = () => {
  return (
    <div className="bottom-navigate">
      <div className="nav-item">
        <FaHome size={24} />
        <span>Home</span>
      </div>
      <div className="nav-item">
        <FaHistory size={24} />
        <span>History</span>
      </div>
      <div className="nav-item">
        <FaChartBar size={24} />
        <span>Charts</span>
      </div>
      <div className="nav-item">
        <FaUser size={24} />
        <span>Profile</span>
      </div>
    </div>
  );
};

export default BottomNavigate;
