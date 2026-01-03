import { useNavigate } from 'react-router-dom';

const RestaurantCard = ({ restaurant, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="res-card" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <img src={restaurant.image} alt={restaurant.restaurantName} style={{ width: '100px' }} />
      <h3>{restaurant.restaurantName}</h3>
      <p>{restaurant.address}</p>
      <p>Type: {restaurant.type}</p>
      <p>Parking: {restaurant.parkingLot ? "Yes" : "No"}</p>

      {/* Requirement: Update button navigates to /admin/restaurants/update */}
      <button onClick={() => navigate('/admin/restaurants/update', { state: { restaurant } })}>
        Update
      </button>

      {/* Requirement: Delete button removes from localStorage and re-renders */}
      <button onClick={() => onDelete(restaurant.restaurantID)}>
        Delete
      </button>
    </div>
  );
};
