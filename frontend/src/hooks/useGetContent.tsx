import { useEffect, useState } from "react";
import { getContent } from "../helpers/getContent";

const useGetContent = (typeContent:string,identity:string="") => {
    const [data,setData] = useState([]);

    
    useEffect(
        () => {
            const getDataContent = async () => {
                const content = await getContent(typeContent,identity);
                setData(content?.datas.premieres);
            }
            getDataContent();
        }
    ,[typeContent,identity])
    

  return {data}
}

export default useGetContent;
