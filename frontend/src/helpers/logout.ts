export const logout = () => {
    localStorage.removeItem('authToken');
    window.location.href = 'admin/login'; // Ajusta la ruta según tu aplicación
  };
  