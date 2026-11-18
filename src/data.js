export const userProfile = { 
  name: "Rahul Sharma", 
  role: "Fleet Manager",
  location: "Mumbai, India",
  company: "Bharat Logistics"
};
 
export const dashboardStats = [
  { label: 'Active Vehicles', value: '42', subtext: 'On Route', color: 'primary', icon: '🚚' },
  { label: 'Pending Deliveries', value: '18', subtext: 'Scheduled', color: 'warning', icon: '📦' },
  { label: 'Total Distance', value: '12,450 km', subtext: 'This week', color: 'info', icon: '🛣️' },
  { label: 'Fuel Cost', value: '₹84,200', subtext: 'This month', color: 'danger', icon: '⛽' },
];
 
export const fleetVehicles = [
  { id: 'TRK-01', model: 'Tata Prima', plate: 'MH-12-1234', driver: 'Amit Singh', fuel: '85%', status: 'Active' },
  { id: 'TRK-02', model: 'Ashok Leyland', plate: 'DL-01-5678', driver: 'Ravi Kumar', fuel: '40%', status: 'Maintenance' },
  { id: 'TRK-03', model: 'Eicher Pro', plate: 'KA-05-9012', driver: 'Suresh Patil', fuel: '92%', status: 'Active' },
];
 
export const initialShipments = [
  { id: 'SHP-1001', origin: 'Mumbai', destination: 'Pune', driver: 'Amit Singh', status: 'In Transit', eta: '2 hrs' },
  { id: 'SHP-1002', origin: 'Delhi', destination: 'Jaipur', driver: 'Ravi Kumar', status: 'Delivered', eta: 'Completed' },
  { id: 'SHP-1003', origin: 'Bengaluru', destination: 'Chennai', driver: 'Suresh Patil', status: 'Pending', eta: '4 hrs' },
];
 
export const driversList = [
  { id: 1, name: 'Amit Singh', phone: '+91 98765-43210', status: 'On Route', rating: 4.8, assignedTo: 'SHP-1001' },
  { id: 2, name: 'Ravi Kumar', phone: '+91 87654-32109', status: 'Available', rating: 4.9, assignedTo: 'None' },
  { id: 3, name: 'Suresh Patil', phone: '+91 76543-21098', status: 'On Route', rating: 4.7, assignedTo: 'SHP-1003' },
];
 