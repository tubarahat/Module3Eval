import React, { useState, useEffect } from 'react';
import { getLocalData, setLocalData } from './utils';
import Navbar from './Navbar';

const AdminDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filters, setFilters] = useState({ search: '', type: '', parking: '' });
  const [form, setForm] = useState({
    restaurantName: '', address: '', type: 'Rajasthani', parkingLot: 'true',
    image: 'https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaN'
  });

  useEffect(() => { setRestaurants(getLocalData()); }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.restaurantName || !form.address) return alert("Fields cannot be empty!"); // Edge case
    
    const newRes = { ...form, restaurantID: Date.now(), parkingLot: form.parkingLot === 'true' };
    const updated = [...restaurants, newRes];
    setLocalData(updated);
    setRestaurants(updated);
    setForm({ ...form, restaurantName: '', address: '' }); // Clear form
    alert("Successful addition"); // Alert requirement
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) { // Confirm dialog
      const updated = restaurants.filter(r => r.restaurantID !== id);
      setLocalData(updated);
      setRestaurants(updated);
      alert("Successful deletion");
    }
  };

  const filteredData = restaurants.filter(res => 
    (res.restaurantName.toLowerCase().includes(filters.search.toLowerCase()) || 
     res.address.toLowerCase().includes(filters.search.toLowerCase())) &&
    (filters.type === "" || res.type === filters.type) &&
    (filters.parking === "" || String(res.parkingLot) === filters.parking)
  );

  return (
    <div>
      <Navbar filters={filters} setFilters={setFilters} />
      <div style={{ display: 'flex' }}>
        <aside style={{ width: '250px', padding: '20px' }}>
          <h3>Add Restaurant</h3>
          <form onSubmit={handleAdd}>
            <input placeholder="Name" value={form.restaurantName} onChange={e => setForm({...form, restaurantName: e.target.value})} /><br/>
            <input placeholder="Address" value={form.address} onChange={e => setForm({...form, address: e.target.value})} /><br/>
            <button type="submit">Add</button>
          </form>
        </aside>
        <main style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {filteredData.map(res => (
            <div key={res.restaurantID} style={{ border: '1px solid #ddd', padding: '10px' }}>
              <img src={res.image} width="150" alt="res" />
              <h4>{res.restaurantName}</h4>
              <button onClick={() => handleDelete(res.restaurantID)}>Delete</button>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};
