import React, { useState } from "react";
import BasicSpeedDial from '../../BasicSpeedDial';

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
  const [image, setImage] = useState<string | null>(null);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  // const [year, setYear] = useState('');
  // const [gender, setGender] = useState('');
  // const [synopsis, setSynopsis] = useState('');
  // const [cast, setCast] = useState('');
  // const [duration, setDuration] = useState('');
  // const [playback, setPlayback] = useState('');
  const [formValues, setFormValues] = useState<{
    title: string,
    image: File | null,
    year: string,
    gender: string,
    synopsis: string,
    cast: string,
    duration: string,
    playback: string,
    trailer: string
  }>({
    title: "",
    image: null,
    year: "",
    gender: "",
    synopsis: "",
    cast: "",
    duration: "",
    playback: dataDefault,
    trailer: ""
  });

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    const { name, value, files } = event.target;

    if (name === 'image') {
      const selectedImage = files?.[0] || null;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: selectedImage,
      }));
      if (selectedImage) {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result;
          if (typeof result === 'string') {
            setImage(result);
          }
        };
        reader.readAsDataURL(selectedImage);
      } else {
        setImage(null);
      }
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const sendData = async (e:React.FormEvent) => {
      e.preventDefault();
      const {title,image,year,gender,synopsis,cast,duration,playback, trailer} = formValues;
      const formData = new FormData();
      formData.append("title",title);
      if (image != null) formData.append("image", image);
      formData.append("year", year);
      formData.append("gender", gender);
      formData.append("synopsis", synopsis);
      formData.append("cast", cast);
      formData.append("duration", duration);
      formData.append("playback", playback);
      formData.append("trailer", trailer);
      formData.append("typeContent",typeContent);
      
      try {
        const response = await fetch(`http://localhost:3000/${typeContent}/add`,{
          method: 'POST',
          body: formData,
        });

        const result = await response.json();
        console.log(result);
        if (result.ok) console.log(result)
        
      } catch (error) {
        console.log(`Error en la solicitud: ${error}`)
      }
    }

    const handleImageClick = () => {
      setFullscreen(!fullscreen);
    };

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
            {image ? (
                <img src={image} className="form-control m-2" style={{ maxWidth: '200px', maxHeight: '200px' }} alt="Vista previa de la imagen" onClick={handleImageClick}  />
              ): <></>}
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
            <textarea className="form-control" placeholder="Ingresa el json con los servidores" aria-label="json" id="jsonContent" defaultValue={dataDefault} rows={10} cols={50} name="playback" onChange={handleInputChange} />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="trailerContent" className="form-label">Trailer:</label>
            <input className="form-control" type="text" placeholder="Ingresa el link del trailer ej: https://www.youtube.com/id" aria-label="trailer" id="trailerContent" name="trailer" onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-outline-dark m-3" id="send">Enviar</button>
          </div>
        </form>
      </div>
      <div style={{position: "fixed", bottom:"5vh", right: "2vw", zIndex:"2"}}>
        <BasicSpeedDial typeContent={typeContent}/>
      </div>
    </main>
    </>
  )
}

