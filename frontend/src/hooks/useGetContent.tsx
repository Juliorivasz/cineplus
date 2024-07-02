import { useCallback, useEffect, useState } from "react";
import { getContent } from "../helpers/getContent";

const useGetContent = (typeContent:string,identity:string="") => {
    const [data,setData] = useState([]);

    const getDataContent = useCallback(async () => {
        const content = await getContent(typeContent,identity);
        setData(content?.datas.premieres);
    },[typeContent, identity]);
    
    useEffect(
        () => {
            getDataContent();
        }
    ,[getDataContent])
    

  return {data, refetch: getDataContent}
}

export default useGetContent;
