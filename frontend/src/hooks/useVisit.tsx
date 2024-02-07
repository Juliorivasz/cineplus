
export const useVisit = () => {
    // guarda la visita
    const saveVisit = async () => {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString();
        const response = await fetch("http://localhost:3000/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({date: formattedDate}),
        })

        if(response.ok) {
            const data = response.json()
            return data;
        }
        return false
    };
    // info de visitas GET
    const getVisit = async () => {
        const response = await fetch("http://localhost:3000/allvisit");
        
        if(response.ok) {
            const data = response.json();
            return data;
        }
        return false;
    }
  return {saveVisit,getVisit}
}

export default useVisit;
