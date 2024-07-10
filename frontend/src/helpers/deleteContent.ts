import { refreshToken } from "./refreshToken";

export const deleteContent = async (typeContent:string, identity:string="") => {
    try {
        let token = localStorage.getItem("authToken");
        const response = await fetch(`http://localhost:3000/${typeContent}/remove?id=${identity}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            credentials: 'include'
        });
        if (response.status === 401) { // Si el token ha expirado
            token = await refreshToken(); // Refresca el token
            if (!token) throw new Error("No se pudo refrescar el token");
      
            const retryResponse = await fetch(`http://localhost:3000/${typeContent}?id=${identity}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              }
            });
            
            if (!retryResponse.ok) throw new Error("No se pudo eliminar el contenido de nuevo");
          }
         if(!response.ok) throw new Error("No se pudo eliminar el contenido");
        return true;
     } catch (error) {
        console.error(error)
     }
}