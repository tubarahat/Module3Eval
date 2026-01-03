export const getLocalData = () => {
  const data = localStorage.getItem('evalData');
  return data ? JSON.parse(data) : [];
};

export const setLocalData = (data) => {
  localStorage.setItem('evalData', JSON.stringify(data));
};
