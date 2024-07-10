import { useEffect, useState } from "react";
import BasicSpeedDial from "../BasicSpeedDial";
import FolderList from '../FolderList';
import useGetContent from "../../hooks/useGetContent";
import { deleteContent } from "../../helpers/deleteContent";
import { capitalizeText } from '../../helpers/capitalizeText';
import BackButton from "../BackButton";
import NoContent from './NoContent';

interface TypeContent {
  typeContent: string;
}

export const AdminContents = ({typeContent}: TypeContent) => {
  const [amount, setAmount] = useState(0);
  const { data, refetch } = useGetContent(typeContent);
  const [selectedContentId, setSelectedContentId] = useState<string | null>(null);
  const [showNoContent, setShowNoContent] = useState(false);

  useEffect(() => {
    const sizeContent = () => {
      setAmount(data.length)
    }
    sizeContent();
  }, [data]);

  useEffect(() => {
    if (amount === 0) {
      const timer = setTimeout(() => {
        setShowNoContent(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setShowNoContent(false);
    }
  }, [amount]);

  const handleSelect = (id: string) => {
    setSelectedContentId(id === selectedContentId ? null : id);
  };

  const handleDelete = async (id: string) => {
    const response = await deleteContent(typeContent, id);
    console.log(response);
    // Luego actualizas el estado local para reflejar la eliminación
    setSelectedContentId(null);
    refetch();
  };

  return (
    <>
      <main>
        <h1>{capitalizeText(typeContent)}</h1>
        <BackButton />
        <div style={{ display: "flex", justifyContent: "space-evenly", margin: "2em 0", borderRadius: ".3em" }}>
          <div style={{ padding: "10%", background: "darkgray", borderRadius: ".3em", width: "30%", margin: "0 1em" }}>
            <h2>{amount}</h2>
            <p>existents</p>
          </div>
          {amount ? (
            <div style={{ width: "50%", margin: "auto", overflow: "auto", maxHeight: "300px", transition: 'opacity 1s ease-in-out' }}>
              {data.map((content, index) => (
                <FolderList 
                  key={index}
                  content={content}
                  onSelect={handleSelect}
                  selectedContent={selectedContentId}
                />
              ))}
            </div>
          ) : showNoContent && <NoContent message="No hay contenido existente" />}
        </div>
        <div style={{ position: "fixed", bottom: "20vh", right: "15vw", zIndex: "2" }}>
          <BasicSpeedDial typeContent={typeContent} selectedContentId={selectedContentId} onDelete={handleDelete} />
        </div>
      </main>
    </>
  )
}
