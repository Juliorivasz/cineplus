import { ButtonRoutes } from "./ButtonRoutes"
import { VisitPage } from "./VisitPage"

export const AdminHome = () => {
  
  return (
    <main>
      <h1>Dashboard</h1>
      <hr />
      <ol style={{display: 'flex', justifyContent:'space-evenly', alignItems: 'center', flexWrap:'wrap'}}>
        <ButtonRoutes typeContent="Premiers"/>
        <ButtonRoutes typeContent="Movies"/>
        <ButtonRoutes typeContent="Series"/>
        <ButtonRoutes typeContent="Animes"/>
      </ol>
      <VisitPage/>
    </main>
  )
}
