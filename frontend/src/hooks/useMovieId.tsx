import { useLocation } from "react-router-dom"

export const useMovieId = () => {
    const id = useLocation().search.replace('?','').trim();
    const typeContent = (location.pathname.split('/')[1])+'s';
    return {id, typeContent};
} 