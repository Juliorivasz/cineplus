
const useGetContent = () => {
    const getContent = async (typeContent:string) => {
        try {
            const response = await fetch(`http://localhost:3000/${typeContent}`);
            if(!response.ok) throw new Error("No se pudo obtener los datos");
            const info = await response.json();
            return {info, state: true};
        } catch (error) {
            console.error(error)
        }
    }

  return {getContent}
}

export default useGetContent;
