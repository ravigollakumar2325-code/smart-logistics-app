export default function Settings() {
  return (
    <div className="card p-4 mx-auto" style={{ maxWidth: '800px' }}>
      <h5 className="fw-bold mb-4">Account Settings</h5>
      
      <div className="mb-4">
        <label className="form-label fw-bold text-muted small">Company Email</label>
        <input type="email" className="form-control bg-transparent border-secondary" defaultValue="manager@bharatlogistics.in" />
      </div>
      
      <h6 className="fw-bold mt-5 mb-3">Notification Preferences</h6>
      <div className="form-check form-switch mb-2">
        <input className="form-check-input" type="checkbox" id="notif1" defaultChecked />
        <label className="form-check-label" htmlFor="notif1">Email me for shipment delays</label>
      </div>
      <div className="form-check form-switch mb-4">
        <input className="form-check-input" type="checkbox" id="notif2" defaultChecked />
        <label className="form-check-label" htmlFor="notif2">Push notifications for new deliveries</label>
      </div>
 
      <button className="btn btn-primary">Save Changes</button>
    </div>
  );
}
