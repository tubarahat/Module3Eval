import React, { useEffect, useRef } from 'react';

const Navbar = ({ filters, setFilters }) => {
  const searchInputRef = useRef(null);

  // Requirement: Search input should be focused automatically when component loads
  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <nav style={{ padding: '15px', backgroundColor: '#f4f4f4', display: 'flex', gap: '20px', alignItems: 'center' }}>
      {/* Search Bar: Name or Address (Partial search supported) */}
      <input
        ref={searchInputRef}
        name="search"
        type="text"
        placeholder="Search by name or address..."
        value={filters.search}
        onChange={handleChange}
        style={{ padding: '8px', width: '250px' }}
      />

      {/* Filter by Restaurant Type */}
      <select name="type" value={filters.type} onChange={handleChange} style={{ padding: '8px' }}>
        <option value="">All Types</option>
        <option value="Rajasthani">Rajasthani</option>
        <option value="Gujarati">Gujarati</option>
        <option value="Mughlai">Mughlai</option>
        <option value="Jain">Jain</option>
        <option value="Thai">Thai</option>
        <option value="North Indian">North Indian</option>
        <option value="South Indian">South Indian</option>
      </select>

      {/* Filter by Parking Availability */}
      <select name="parking" value={filters.parking} onChange={handleChange} style={{ padding: '8px' }}>
        <option value="">All Parking</option>
        <option value="true">With Parking</option>
        <option value="false">No Parking</option>
      </select>
    </nav>
  );
};

export default Navbar;
