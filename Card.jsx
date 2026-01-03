const RestaurantCard = ({ restaurant }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px', width: '250px' }}>
      {/* Show: Restaurant Image */}
      <img 
        src={restaurant.image} 
        alt={restaurant.restaurantName} 
        style={{ width: '100%', height: '150px', objectFit: 'cover' }} 
      />
      {/* Show: Name, Address, Type, and Parking */}
      <h3>{restaurant.restaurantName}</h3>
      <p><strong>Address:</strong> {restaurant.address}</p>
      <p><strong>Cuisine:</strong> {restaurant.type}</p>
      <p><strong>Parking:</strong> {restaurant.parkingLot ? "Available" : "Not Available"}</p>
    </div>
  );
};
