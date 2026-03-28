
import { FaReact, FaCode, FaNetworkWired } from 'react-icons/fa';

function Roles() {
  return (
    <section className="roles-section">
      <hr className="roles-divider" />
      <div className="roles-grid">
        <div className="role-item">
          <FaReact className="role-icon" /> React.js 
        </div>
        <div className="role-item">
          <FaCode className="role-icon" /> JavaScript 
        </div>
        <div className="role-item">
          <FaNetworkWired className="role-icon" /> HTML/CSS
        </div>
      </div>
    </section>
  );
}

export default Roles;