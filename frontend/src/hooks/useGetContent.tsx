import { useCallback, useEffect, useState } from "react";
import { getContent } from "../helpers/getContent";
import { Content } from "../components/FolderList";

type ContentData = Content;
type ContentDataArray = Content[];

type ContentState = ContentData | ContentDataArray | null;

const useGetContent = (typeContent:string,identity:string=""): { data: ContentState, refetch: () => void } => {
    const [data,setData] = useState<ContentState>(null);

    
    const getDataContent = useCallback(async () => {
        const content = await getContent(typeContent,identity);
        
        content?.datas[typeContent] == undefined ? setData(content?.datas): setData(content?.datas[typeContent]);

    },[typeContent, identity]);
    
    useEffect(
        () => {
            getDataContent();
        }
    ,[getDataContent])

    

  return {data, refetch: getDataContent}
}

export default useGetContent;
