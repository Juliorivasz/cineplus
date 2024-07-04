import { logout } from "./logout";

export const refreshToken = async () => {
    const refresh_token = localStorage.getItem('authToken'); // O donde sea que almacenes el token de actualización
  
    try {
      const response = await fetch(`http://localhost:3000/renew-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${refresh_token}`
        }
      });
  
      if (!response.ok) {
        if (response.status === 401) {
          // La sesión ha expirado
          logout();
        }
        throw new Error("No se pudo refrescar el token");
      }
  
      const { token } = await response.json();
      localStorage.setItem('authToken', token); // Guarda el nuevo token de acceso
      return token;
    } catch (error) {
      console.error(error);
      logout();
      return null;
    }
  };
  