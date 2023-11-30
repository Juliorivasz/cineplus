import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export const useRoute = () => {
    // nombre de la ruta sin la barra /
    const stateContent = useLocation().pathname;
    // estado inicial de la ruta
    const [contentState, setContentState] = useState('/');
    // renderizada de nuevo si el nombre de la ruta cambia
    useEffect(() => {
        setContentState(stateContent)
    }, [stateContent])
    return contentState;
} 