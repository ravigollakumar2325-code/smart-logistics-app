import { driversList } from '../data';
import { FaPhoneAlt, FaStar } from 'react-icons/fa';
 
export default function Drivers() {
  return (
    <div className="row g-4">
      {driversList.map(d => (
        <div className="col-md-6 col-lg-4" key={d.id}>
          <div className="card card-hover p-4 h-100">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-secondary bg-opacity-10 text-secondary rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{width: '50px', height: '50px', fontSize: '1.2rem'}}>
                  {d.name.charAt(0)}
                </div>
                <div>
                  <h6 className="fw-bold mb-0">{d.name}</h6>
                  <small className="text-muted"><FaPhoneAlt /> {d.phone}</small>
                </div>
              </div>
              <span className={`badge ${d.status === 'Available' ? 'bg-success' : d.status === 'On Route' ? 'bg-primary' : 'bg-secondary'}`}>
                {d.status}
              </span>
            </div>
            
            <div className="d-flex justify-content-between border-top border-secondary pt-3 mt-auto">
              <div>
                <small className="text-muted d-block">Rating</small>
                <span className="fw-bold text-warning"><FaStar /> {d.rating}</span>
              </div>
              <div className="text-end">
                <small className="text-muted d-block">Assigned To</small>
                <span className="fw-bold">{d.assignedTo}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
