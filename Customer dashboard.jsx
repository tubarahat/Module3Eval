const CustomerDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('evalData')) || [];
    setRestaurants(data);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Available Restaurants</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {/* Requirement: Customer should see only restaurant cards, no add/update/delete */}
        {restaurants.map(res => <RestaurantCard key={res.restaurantID} restaurant={res} isAdmin={false} />)}
      </div>
    </div>
  );
};
