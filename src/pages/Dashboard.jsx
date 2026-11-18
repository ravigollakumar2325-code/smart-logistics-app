import { Link } from 'react-router-dom';
import { dashboardStats, fleetVehicles } from '../data';
import { FaArrowRight, FaGasPump } from 'react-icons/fa';
 
export default function Dashboard() {
  return (
    <div>
      <div className="mb-4">
        <h4 className="fw-bold">Fleet Overview</h4>
        <p className="text-muted small">Monitor your vehicles and deliveries.</p>
      </div>
 
      <div className="row g-4 mb-4">
        {dashboardStats.map((s, i) => (
          <div className="col-md-6 col-xl-3" key={i}>
            <div className="card card-hover p-4 h-100">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className={`bg-${s.color} bg-opacity-10 p-2 rounded fs-5`}>{s.icon}</div>
                <span className={`badge bg-${s.color} bg-opacity-25 text-${s.color}`}>{s.subtext}</span>
              </div>
              <h6 className="text-muted small fw-bold mb-1">{s.label}</h6>
              <h3 className="fw-bold mb-0">{s.value}</h3>
            </div>
          </div>
        ))}
      </div>
 
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card p-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold mb-0">Fleet Status</h5>
              <Link to="/shipments" className="btn btn-sm btn-outline-primary">View All <FaArrowRight /></Link>
            </div>
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Vehicle ID</th>
                    <th>Model</th>
                    <th>Plate</th>
                    <th>Fuel Level</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {fleetVehicles.map(v => (
                    <tr key={v.id}>
                      <td className="fw-bold">{v.id}</td>
                      <td>{v.model}</td>
                      <td>{v.plate}</td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <FaGasPump className="text-muted" />
                          <div className="progress w-100" style={{height: '6px'}}>
                            <div className={`progress-bar bg-${parseInt(v.fuel) > 50 ? 'success' : 'danger'}`} style={{width: v.fuel}}></div>
                          </div>
                          <small>{v.fuel}</small>
                        </div>
                      </td>
                      <td>
                        <span className={`badge ${v.status === 'Active' ? 'bg-success' : 'bg-warning text-dark'}`}>
                          {v.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
 
        <div className="col-lg-4">
          <div className="card bg-primary text-white border-0 shadow-lg h-100 p-4" style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)' }}>
            <h5 className="fw-bold mb-3">Quick Actions</h5>
            <p className="small opacity-75 mb-4">Manage your logistics operations efficiently.</p>
            <Link to="/shipments" className="btn btn-light text-primary fw-bold w-100 mb-2">Add New Shipment</Link>
            <Link to="/drivers" className="btn btn-outline-light fw-bold w-100 mb-2">Assign Driver</Link>
            <Link to="/tracking" className="btn btn-outline-light fw-bold w-100">Track Vehicles</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
 