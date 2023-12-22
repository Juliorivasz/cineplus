import { useEffect, useState } from "react";

// useAuthentication.ts
const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect( () => {
    const sesion = localStorage.getItem('authToken')
    if(sesion){
      setIsAuthenticated(true);
    }else {
      setIsAuthenticated(false);
    }
  },[])

  const isLoggedIn = async () => {
    try {
      const response = await fetch(`http://localhost:3000/admin/login`, {
        credentials: 'include'
      });
      const data = await response.json();

      if(response.ok) {
        return data;
      }
    } catch (error) {
      console.error(`error al solicitar la autenticacion: ${error}`);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:3000/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      // Verifica la respuesta del backend y actualiza el estado de isLoggedIn
      if (response.ok) {
        localStorage.setItem('authToken', data.token);
        return data;
      } else {
        // Maneja el caso de autenticación fallida (puedes mostrar un mensaje de error, etc.)
        console.error('Error de autenticación:', data.error);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    return;
  };

  return { isAuthenticated, isLoggedIn, login, logout,setIsAuthenticated };
};

export default useAuthentication;
