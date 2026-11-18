import { useState } from 'react';
import { initialShipments } from '../data';
import { FaPlus, FaSearch } from 'react-icons/fa';
 
export default function Shipments() {
  const [shipments, setShipments] = useState(initialShipments);
  const [showModal, setShowModal] = useState(false);
 
  const handleAdd = (e) => {
    e.preventDefault();
    const newShp = {
      id: `SHP-${Math.floor(1000 + Math.random() * 9000)}`,
      origin: e.target.origin.value,
      destination: e.target.dest.value,
      driver: 'Unassigned',
      status: 'Pending',
      eta: 'Pending'
    };
    setShipments([newShp, ...shipments]);
    setShowModal(false);
  };
 
  return (
    <div className="card p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold mb-0">Shipment Management</h5>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          <FaPlus className="me-2" /> Create Shipment
        </button>
      </div>
 
      <div className="input-group mb-4" style={{ maxWidth: '400px' }}>
        <span className="input-group-text bg-transparent border-secondary"><FaSearch /></span>
        <input type="text" className="form-control bg-transparent border-secondary" placeholder="Search by ID or Location..." />
      </div>
 
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Shipment ID</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Driver</th>
              <th>Status</th>
              <th>ETA</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map(s => (
              <tr key={s.id}>
                <td className="fw-bold">{s.id}</td>
                <td>{s.origin}</td>
                <td>{s.destination}</td>
                <td>{s.driver}</td>
                <td>
                  <span className={`badge ${
                    s.status === 'Delivered' ? 'bg-success' :
                    s.status === 'In Transit' ? 'bg-primary' : 'bg-warning text-dark'
                  }`}>
                    {s.status}
                  </span>
                </td>
                <td className="fw-semibold">{s.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
 
      {showModal && (
        <>
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '16px' }}>
                <div className="modal-header border-0 pb-0">
                  <h5 className="modal-title fw-bold">Create New Shipment</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <form onSubmit={handleAdd}>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label small fw-bold">Origin City</label>
                      <input name="origin" type="text" className="form-control bg-transparent border-secondary" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label small fw-bold">Destination City</label>
                      <input name="dest" type="text" className="form-control bg-transparent border-secondary" required />
                    </div>
                  </div>
                  <div className="modal-footer border-0 pt-0">
                    <button type="button" className="btn btn-light" onClick={() => setShowModal(false)}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Create Shipment</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </div>
  );
}