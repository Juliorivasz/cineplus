import { EventType } from "firebase/database";
import { FormEventHandler, useState } from "react";
import { Form } from "react-router-dom";


interface TypeContent {
  typeContent: string;
}

  // plantilla para cargar datos rapido usando json
  const dataDefault = `{
    "castellano": {
      "okru": "https://www.ejemplo.com/okru-castellano"
    },
    "ingles": {
      "okru": "https://www.ejemplo.com/okru-english"
    }
  }`;
  
  
  // const initialData = {
  //   title: "",
  //   image: "",
  //   year: "",
  //   gender: "",
  //   synopsis: "",
  //   cast: "",
  //   duration: "",
  //   playback: dataDefault
  // }

export const Add = ({typeContent}:TypeContent) => {


  const [formData, setFormData] = useState(new FormData());


  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    formData.append(event.target.name, event.target.value)
  };


  const sendData = (e:React.FormEvent) => {
      e.preventDefault();
      
    }

  return (
    <>
    <main>
      <h1>Agregar contenido</h1>
      <div className="container">
        <form action="" onSubmit={sendData}>
          <div className="mb-3 text-start">
            <label htmlFor="titleContent" className="form-label">Titulo:</label>
            <input className="form-control" type="text" placeholder="Ingresa el titulo" aria-label="titulo" id="titleContent" name="title" onChange={handleInputChange} />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="formFile" className="form-label">Imagen de la pelicula:</label>
            <input className="form-control" type="file" id="formFile" name="image" onChange={handleInputChange}/>
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="yeartContent" className="form-label">Año:</label>
            <input className="form-control" type="number" placeholder="Ingresa el Año ej: 2020" aria-label="año" id="yeartContent" name="year" onChange={handleInputChange}/>
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="genderContent" className="form-label">Genero:</label>
            <input className="form-control" list="datalistGender" id="exampleDataList" placeholder="Elige el genero" name="gender" onChange={handleInputChange}/>
              <datalist id="datalistGender">
                <option value="Acción"/>
                <option value="Aventura"/>
                <option value="Animación"/>
                <option value="Biografía"/>
                <option value="Comedia"/>
                <option value="Crimen"/>
                <option value="Documental"/>
                <option value="Drama"/>
                <option value="Familia"/>
                <option value="Fantasía"/>
                <option value="Historia"/>
                <option value="Terror"/>
                <option value="Musical"/>
                <option value="Misterio"/>
                <option value="Romance"/>
                <option value="Ciencia ficción"/>
                <option value="Suspenso"/>
                <option value="Sobrenatural"/>
                <option value="Harem"/>
                <option value="Reality"/>
                <option value="Shounen"/>
              </datalist>
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="synopsisContent" className="form-label">Sinopsis:</label>
            <textarea className="form-control" placeholder="Ingresa la reseña" aria-label="sinopsis" id="synopsisContent" rows={10} cols={50} name="synopsis" onChange={handleInputChange}/>
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="castContent" className="form-label">Reparto:</label>
            <input className="form-control" type="text" placeholder="Ingresa el reparto" aria-label="reparto" id="castContent" name="cast" onChange={handleInputChange}/>
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="durationContent" className="form-label">Duracion:</label>
            <input className="form-control" type="number" placeholder="Ingresa la duracion ej: 190min" aria-label="duracion" id="durationContent" name="duration" onChange={handleInputChange}/>
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="jsonContent" className="form-label">Reproducion:</label>
            <input className="form-control" type="text" placeholder="Ingresa el json con los servidores" aria-label="json" id="jsonContent" defaultValue={dataDefault} name="playback" onChange={handleInputChange} />

          </div>
          <div className="mb-3">
            <button type="button" className="btn btn-outline-dark m-3" id="send">Enviar</button>
            <button type="button" className="btn btn-outline-danger m-3" id="Delete">Borrar</button>
          </div>
        </form>
      </div>
    </main>
    </>
  )
}

