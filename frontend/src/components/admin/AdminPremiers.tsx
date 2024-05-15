import { useState } from "react";
import BasicSpeedDial from "../BasicSpeedDial";
import FolderList from '../FolderList';

interface TypeContent {
  typeContent: string;
}

export const AdminPremiers = ({typeContent}:TypeContent) => {
  const [amount, setAmount] = useState(0);
  const data = {
    image:"",
    date:"",
    avatar:""
  }


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
            <FolderList data={data}/>
          </div>
        </div>
        <div style={{position: "fixed", bottom:"20vh", right: "15vw", zIndex:"2"}}>
          <BasicSpeedDial typeContent={typeContent}/>
        </div>
      </main>
    </>
  )
}
