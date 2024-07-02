import { useEffect, useState } from "react";
import BasicSpeedDial from "../BasicSpeedDial";
import FolderList from '../FolderList';
import useGetContent from "../../hooks/useGetContent";
import { deleteContent } from "../../helpers/deleteContent";

interface TypeContent {
  typeContent: string;
}

export const AdminPremiers = ({typeContent}:TypeContent) => {
  const [amount, setAmount] = useState(0);
  const {data, refetch} = useGetContent(typeContent);
  const [selectedContentId, setSelectedContentId] = useState<string | null>(null);

  
  useEffect(() => {
    const sizeContent = () => {
      setAmount(data.length)
    }
    sizeContent();
  },[data])

  const handleSelect = (id: string) => {
    setSelectedContentId(id === selectedContentId ? null : id);
  };

  const handleDelete = async (id: string) => {
    await deleteContent(typeContent, id);
    // Luego actualizas el estado local para reflejar la eliminación
    setSelectedContentId(null);
    refetch();
  };
  
  return (
    <>
      <main>
        <h1>Premieres</h1>
        <div style={{display: "flex", justifyContent:"space-evenly", margin: "2em 0"}}>
          <div style={{padding: "10%", background: "darkgray", borderRadius:".3em", width: "30%", margin:"0 1em"}}>
            <h2>{amount}</h2>
            <p>existents</p>
          </div>
          <div style={{width: "50%", margin: "auto", overflow:"auto", maxHeight:"300px"}}>
          {data.map((content,index) => (
              <FolderList 
                key={index}
                content={content}
                onSelect={handleSelect}
                selectedContent={selectedContentId}
              /> 
          ))}
          </div>
        </div>
        <div style={{position: "fixed", bottom:"20vh", right: "15vw", zIndex:"2"}}>
          <BasicSpeedDial typeContent={typeContent} selectedContentId={selectedContentId} onDelete={handleDelete}/>
        </div>
      </main>
    </>
  )
}
