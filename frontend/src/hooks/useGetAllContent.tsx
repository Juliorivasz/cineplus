import { useCallback, useEffect, useState } from "react";
import { getContent } from "../helpers/getContent";
import { Content } from '../components/FolderList';

const useGetAllContent = () => {
    const [data,setData] = useState<Content[]>([]);

    
    const getDataContent = useCallback(async () => {
        try {
            const premieresResponse = await getContent("premieres");
            const moviesResponse = await getContent("movies");
            const seriesResponse = await getContent("series");
            const animesResponse = await getContent("animes");
      
            // Extract and concatenate all items into a single array
            const allContent: Content[] = [
              ...(premieresResponse?.datas["premieres"] || premieresResponse?.datas || []),
              ...(moviesResponse?.datas["movies"] || moviesResponse?.datas || []),
              ...(seriesResponse?.datas["series"] || seriesResponse?.datas || []),
              ...(animesResponse?.datas["animes"] || animesResponse?.datas || []),
            ];
      
            setData(allContent);
          } catch (error) {
            console.error("Failed to fetch content:", error);
          }
        }, []);
    
    useEffect(
        () => {
            getDataContent();
        }
    ,[getDataContent])

  return {data, refetch: getDataContent}
}

export default useGetAllContent;