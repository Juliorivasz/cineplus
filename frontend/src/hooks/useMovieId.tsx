import { useLocation } from "react-router-dom"

export const useMovieId = () => {
    const id = useLocation().search.replace('?','');
    return id;
} 