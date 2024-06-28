export const getContent = async (typeContent:string) => {
    try {
        const response = await fetch(`http://localhost:3000/${typeContent}`);
        if(!response.ok) throw new Error("No se pudo obtener los datos");
        const datas = await response.json();
        return {datas, state: true};
    } catch (error) {
        console.error(error)
    }
}