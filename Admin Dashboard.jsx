import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  // Requirement: UI should always render data from localStorage
  const [restaurants, setRestaurants] = useState(() => {
    const savedData = localStorage.getItem('evalData');
    return savedData ? JSON.parse(savedData) : [];
  });

  const [formData, setFormData] = useState({
    restaurantName: '',
    address: '',
    type: 'Rajasthani', // Default select option
    parkingLot: 'true',
    // Requirement: Image URL should be pre-filled
    image: 'https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaN'
  });

  // Requirement: All restaurant data must be stored in localStorage under key: evalData
  useEffect(() => {
    localStorage.setItem('evalData', JSON.stringify(restaurants));
  }, [restaurants]);

  const handleAdd = (e) => {
    e.preventDefault();
    
    // Requirement: restaurantID should be auto-generated
    const newEntry = {
      ...formData,
      restaurantID: Date.now(), 
      parkingLot: formData.parkingLot === 'true'
    };

    // Requirement: On clicking Add, save in localStorage and re-render UI
    setRestaurants([...restaurants, newEntry]);
    
    // Reset form (keeping the pre-filled image)
    setFormData({ ...formData, restaurantName: '', address: '' });
    alert("Restaurant Added Successfully!");
  };

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {/* SIDEBAR - ADD RESTAURANT FORM */}
      <div style={{ width: '300px', borderRight: '1px solid #ccc', paddingRight: '20px' }}>
        <h3>Add Restaurant</h3>
        <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input 
            placeholder="Restaurant Name" 
            value={formData.restaurantName}
            onChange={(e) => setFormData({...formData, restaurantName: e.target.value})}
            required 
          />
          <input 
            placeholder="Address" 
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
            required 
          />
          
          {/* Requirement: Type select dropdown */}
          <label>Cuisine Type:</label>
          <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
            <option value="Rajasthani">Rajasthani</option>
            <option value="Gujarati">Gujarati</option>
            <option value="Mughlai">Mughlai</option>
            <option value="Jain">Jain</option>
            <option value="Thai">Thai</option>
            <option value="North Indian">North Indian</option>
            <option value="South Indian">South Indian</option>
          </select>

          {/* Requirement: parkingLot select dropdown */}
          <label>Parking Lot:</label>
          <select value={formData.parkingLot} onChange={(e) => setFormData({...formData, parkingLot: e.target.value})}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px' }}>
            Add Restaurant
          </button>
        </form>
      </div>

      {/* RESTAURANT LIST DISPLAY */}
      <div style={{ flex: 1 }}>
        <h3>Restaurant List (from LocalStorage)</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
          {restaurants.map((res) => (
            <div key={res.restaurantID} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
              <img src={res.image} alt="res" style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
              <h4>{res.restaurantName}</h4>
              <p><small>{res.address}</small></p>
              <p>Type: <strong>{res.type}</strong></p>
              <p>Parking: {res.parkingLot ? "✅" : "❌"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
