import { useEffect, useState } from "react";
import { getContent } from "../helpers/getContent";

const useGetContent = (typeContent:string) => {
    const [data,setData] = useState([]);

    
    useEffect(
        () => {
            const getDataContent = async () => {
                const content = await getContent(typeContent);
                setData(content?.datas.premieres);
            }
            getDataContent();
        }
    ,[typeContent])
    

  return {data}
}

export default useGetContent;
