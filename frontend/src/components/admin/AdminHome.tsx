import { ButtonRoutes } from "./ButtonRoutes"
import { VisitPage } from "./VisitPage"
import useUser from "../../hooks/useUser"
import { useEffect, useState } from "react";

export const AdminHome = () => {
  const [name, setName] = useState('');

  const { getUser } = useUser();

  useEffect(() => {
    const getUserName = async () => {
      try {
        const userData = await getUser();
        
        if (userData) {
          setName(userData.name);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUserName();
  }, [getUser]);

  return (
    <main>
      <h1><p>{`Welcome, ${name}`}</p></h1>
      <hr />
      <ol style={{display: 'flex', justifyContent:'space-evenly', alignItems: 'center', flexWrap:'wrap'}}>
        <ButtonRoutes typeContent="Premieres"/>
        <ButtonRoutes typeContent="Movies"/>
        <ButtonRoutes typeContent="Series"/>
        <ButtonRoutes typeContent="Animes"/>
      </ol>
      <VisitPage/>
    </main>
  )
}
