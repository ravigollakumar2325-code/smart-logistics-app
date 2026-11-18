import { FaTruck, FaMapMarkerAlt } from 'react-icons/fa';
 
export default function Tracking() {
  return (
    <div className="row g-4">
      <div className="col-lg-8">
        <div className="map-container shadow-sm">
          <div className="map-pin" style={{ top: '40%', left: '30%' }}>
            <FaTruck /> TRK-01
          </div>
          <div className="map-pin" style={{ top: '60%', left: '70%', background: '#f59e0b' }}>
            <FaTruck /> TRK-03
          </div>
          <div className="map-pin" style={{ top: '25%', left: '50%', background: '#ef4444' }}>
            <FaMapMarkerAlt /> Drop-off
          </div>
        </div>
      </div>
      
      <div className="col-lg-4">
        <div className="card p-4 h-100">
          <h5 className="fw-bold mb-4">Active Vehicles</h5>
          <div className="d-flex flex-column gap-3">
            <div className="border border-secondary rounded p-3">
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-bold text-primary">TRK-01 (Tata)</span>
                <span className="badge bg-success">Moving</span>
              </div>
              <div className="small text-muted mb-1"><FaMapMarkerAlt /> Mumbai to Pune</div>
              <div className="small fw-bold">ETA: 2 hours</div>
            </div>
            
            <div className="border border-secondary rounded p-3">
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-bold text-warning">TRK-03 (Eicher)</span>
                <span className="badge bg-warning text-dark">Stopped</span>
              </div>
              <div className="small text-muted mb-1"><FaMapMarkerAlt /> Bengaluru to Chennai</div>
              <div className="small fw-bold">ETA: 4 hours</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 