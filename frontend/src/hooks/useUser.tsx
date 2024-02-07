
export const useUser = () => {
    // obtener usuario
    const getUser = async () => {
        try {
          const response = await fetch("http://localhost:3000/admin/user");
          const user = await response.json();
          if (!response.ok) {
            return null;
          }
          return user[0];
        } catch (error) {
          console.log(error);
        }
      };

    //aumenta el contador de visitas
    const incrementVisitCount = (): number => {
        const visitCount = localStorage.getItem('visitCount') || '0';
        const updatedCount = parseInt(visitCount, 10) + 1;
        localStorage.setItem('visitCount', updatedCount.toString());
        return updatedCount;
    };
    
    // muestra el contador
    const getVisitCount = (): number => {
        return parseInt(localStorage.getItem('visitCount') || '0', 10);
    };
   

      
  return {getUser,incrementVisitCount,getVisitCount}
}

export default useUser;