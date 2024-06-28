import { useEffect, useState } from "react";
import BasicSpeedDial from "../BasicSpeedDial";
import FolderList from '../FolderList';
import useGetContent from "../../hooks/useGetContent";

interface TypeContent {
  typeContent: string;
}

export const AdminPremiers = ({typeContent}:TypeContent) => {
  const [amount, setAmount] = useState(0);
  const {data} = useGetContent(typeContent);  
  
  useEffect(() => {
    const sizeContent = async () => {
      setAmount(data.length)
    }
    sizeContent();
  },[data])
  
  return (
    <>
      <main>
        <h1>Premieres</h1>
        <div style={{display: "flex", justifyContent:"space-evenly", margin: "2em 0"}}>
          <div style={{padding: "10%", background: "darkgray", borderRadius:".3em", width: "30%", margin:"0 1em"}}>
            <h2>{amount}</h2>
            <p>existents</p>
          </div>
          <div style={{width: "50%", margin: "auto"}}>
          {data.map((content, index) => (
              <FolderList key={index}
              content={content}
              /> 
          ))}
          </div>
        </div>
        <div style={{position: "fixed", bottom:"20vh", right: "15vw", zIndex:"2"}}>
          <BasicSpeedDial typeContent={typeContent}/>
        </div>
      </main>
    </>
  )
}
