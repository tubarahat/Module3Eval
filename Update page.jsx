import { useLocation, useNavigate } from 'react-router-dom';

const UpdatePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState(state.restaurant);

  const handleUpdate = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem('evalData')) || [];
    
    // Update data in localStorage
    const updatedData = existingData.map(item => 
      item.restaurantID === data.restaurantID ? data : item
    );
    
    localStorage.setItem('evalData', JSON.stringify(updatedData));
    // Redirect back to /admin/dashboard
    navigate('/admin/dashboard');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Update Restaurant</h2>
      <form onSubmit={handleUpdate}>
        <input value={data.restaurantName} onChange={(e) => setData({...data, restaurantName: e.target.value})} /><br/><br/>
        <input value={data.address} onChange={(e) => setData({...data, address: e.target.value})} /><br/><br/>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
