import { EventType, set } from "firebase/database";
import React, { FormEventHandler, useState } from "react";
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


  // const [initialState, setInitialState] = useState(initialData);
  // const [title, setTitle] = useState('');
  // const [image, setImage] = useState(null);
  // const [year, setYear] = useState('');
  // const [gender, setGender] = useState('');
  // const [synopsis, setSynopsis] = useState('');
  // const [cast, setCast] = useState('');
  // const [duration, setDuration] = useState('');
  // const [playback, setPlayback] = useState('');
  const [formValues, setFormValues] = useState<{
    title: "",
    image: File | null,
    year: "",
    gender: "",
    synopsis: "",
    cast: "",
    duration: "",
    playback: string
  }>({
    title: "",
    image: null,
    year: "",
    gender: "",
    synopsis: "",
    cast: "",
    duration: "",
    playback: dataDefault
  });


  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    const { name, value, files } = event.target;

    if (name === 'image') {
      const selectedImage = files?.[0] || null;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: selectedImage,
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const sendData = async (e:React.FormEvent) => {
      e.preventDefault();
      const {title,image,year,gender,synopsis,cast,duration,playback} = formValues;
      const formData = new FormData();
      formData.append("title",title);
      if (image != null) formData.append("image", image);
      formData.append("year", year);
      formData.append("gender", gender);
      formData.append("synopsis", synopsis);
      formData.append("cast", cast);
      formData.append("duration", duration);
      formData.append("playback", playback);


      try {
        const response = await fetch(`http://localhost:3000/${typeContent}/add`,{
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          body: formData,
        });

        const result = await response;
        if (result.ok) console.log(result)
        
      } catch (error) {
        console.log(`Error en la solicitud: ${error}`)
      }
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
            <button type="submit" className="btn btn-outline-dark m-3" id="send">Enviar</button>
          </div>
        </form>
      </div>
    </main>
    </>
  )
}
