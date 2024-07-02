export const deleteContent = async (typeContent:string, identity:string="") => {
    try {
        const response = await fetch(`http://localhost:3000/${typeContent}/remove?id=${identity}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
         if(!response.ok) throw new Error("No se pudo eliminar el contenido");
        return true;
     } catch (error) {
        console.error(error)
     }
}