import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { FaThLarge, FaMapMarkedAlt, FaBox, FaUsers, FaSun, FaMoon, FaExchangeAlt, FaBell, FaSignOutAlt, FaCog, FaUser, FaTruck } from 'react-icons/fa';
import { userProfile } from './data';
 
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Tracking from './pages/Tracking';
import Shipments from './pages/Shipments';
import Drivers from './pages/Drivers';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
 
function Layout({ children, theme, setTheme, dir, setDir }) {
  const location = useLocation();
  if (location.pathname === '/') return <>{children}</>;
 
  return (
    <div className="d-flex">
      <aside className="sidebar p-3 d-none d-md-flex">
        <div className="brand mb-4 px-2 text-white d-flex align-items-center gap-2">
          <FaTruck className="text-primary" size={20} />
          <span className="fw-bold fs-5">LogiTrack</span>
        </div>
        
        <div className="sidebar-scroll d-flex flex-column">
          <small className="text-secondary fw-bold mt-2 mb-2 px-2" style={{fontSize: '11px', letterSpacing: '1px'}}>MAIN MENU</small>
          <NavLink to="/dashboard" className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}><FaThLarge /> Dashboard</NavLink>
          <NavLink to="/tracking" className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}><FaMapMarkedAlt /> Live Tracking</NavLink>
          <NavLink to="/shipments" className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}><FaBox /> Shipments</NavLink>
          <NavLink to="/drivers" className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}><FaUsers /> Drivers</NavLink>
 
          <small className="text-secondary fw-bold mt-4 mb-2 px-2" style={{fontSize: '11px', letterSpacing: '1px'}}>PREFERENCES</small>
          <NavLink to="/profile" className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}><FaUser /> Profile</NavLink>
          <NavLink to="/settings" className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}><FaCog /> Settings</NavLink>
        </div>
        
        <div className="mt-3 pt-3 border-top border-secondary">
          <div className="d-flex align-items-center gap-3 px-2 mb-3">
             <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{width: '35px', height: '35px'}}>{userProfile.name.charAt(0)}</div>
             <div>
                <h6 className="text-white mb-0" style={{fontSize: '14px'}}>{userProfile.name}</h6>
                <small className="text-secondary" style={{fontSize: '11px'}}>{userProfile.role}</small>
             </div>
          </div>
          <NavLink to="/" className="side-link text-danger fw-semibold"><FaSignOutAlt /> Logout</NavLink>
        </div>
      </aside>
 
      <div className="flex-grow-1 d-flex flex-column" style={{ minHeight: '100vh' }}>
        <header className="topbar d-flex justify-content-between align-items-center px-4 py-3">
          <h6 className="mb-0 fw-bold d-none d-md-block">{userProfile.company}</h6>
          
          <div className="d-flex gap-3 align-items-center ms-auto">
            <button className="btn btn-soft fw-bold" onClick={() => setDir(dir === 'ltr' ? 'rtl' : 'ltr')}>
              {dir.toUpperCase()}
            </button>
            <button className="btn btn-soft" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            
            <div className="dropdown">
              <button className="btn btn-soft position-relative p-2 rounded-circle" data-bs-toggle="dropdown">
                <FaBell size={16} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize: '9px'}}>2</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end mt-2" style={{width: '280px'}}>
                <li><h6 className="dropdown-header fw-bold">Notifications</h6></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item py-2" href="#"><strong>Alert:</strong> TRK-02 requires maintenance.</a></li>
                <li><a className="dropdown-item py-2" href="#"><strong>New:</strong> Shipment SHP-1004 assigned.</a></li>
              </ul>
            </div>
          </div>
        </header>
 
        <main className="p-4 flex-grow-1">{children}</main>
      </div>
    </div>
  );
}
 
export default function App() {
  const [theme, setTheme] = useState('dark');
  const [dir, setDir] = useState('ltr');
 
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.documentElement.setAttribute('dir', dir);
  }, [theme, dir]);
 
  return (
    <BrowserRouter>
      <Layout theme={theme} setTheme={setTheme} dir={dir} setDir={setDir}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
 