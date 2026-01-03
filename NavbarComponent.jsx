import React, { useEffect, useRef } from 'react';

const Navbar = ({ filters, setFilters }) => {
  const searchInputRef = useRef(null);

  // Requirement: Auto-focus search input on load using useRef
  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <nav style={{ padding: '10px', display: 'flex', gap: '15px', borderBottom: '1px solid #ccc' }}>
      <input
        ref={searchInputRef}
        name="search"
        placeholder="Search by name or address..."
        value={filters.search}
        onChange={handleChange}
      />
      <select name="type" value={filters.type} onChange={handleChange}>
        <option value="">All Cuisines</option>
        <option value="Rajasthani">Rajasthani</option>
        <option value="Gujarati">Gujarati</option>
        <option value="Mughlai">Mughlai</option>
        <option value="Jain">Jain</option>
        <option value="Thai">Thai</option>
        <option value="North Indian">North Indian</option>
        <option value="South Indian">South Indian</option>
      </select>
      <select name="parking" value={filters.parking} onChange={handleChange}>
        <option value="">All Parking</option>
        <option value="true">Available</option>
        <option value="false">Not Available</option>
      </select>
    </nav>
  );
};

export default Navbar;
