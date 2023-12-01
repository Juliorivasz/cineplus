
export const Player = () => {
  return (
    <div>
        <p style={{textAlign: "start"}}><strong>Reproduccion</strong></p>
        <div>
            <div style={{backgroundColor:"#ccc"}}>
                <ul className="nav nav-tabs" style={{borderColor: "#ddd", backgroundColor: "#ddd"}}>
                    <li className="nav-item"><a className="nav-link active" style={{borderColor: "transparent",backgroundColor: "#ccc"}} href="">Castellano</a></li>
                    <li className="nav-item"><a className="nav-link" href="">Español</a></li>
                    <li className="nav-item"><a className="nav-link" href="">Ingles</a></li>
                    <li className="nav-item"><a className="nav-link" href="">Subtitulada</a></li>
                </ul>
                <ul className="nav nav-tabs">
                    <li className="nav-item"><a className="nav-link active" style={{borderColor: "transparent",backgroundColor: "#bbb"}} href="">trailer</a></li>
                    <li className="nav-item"><a className="nav-link" href="">Mega</a></li>
                    <li className="nav-item"><a className="nav-link" href="">netflix</a></li>
                    <li className="nav-item"><a className="nav-link" href="">okru</a></li>
                </ul>
            </div>
            <div className="video" style={{padding: "1rem", backgroundColor: "#bbb"}}>
                <div className="ratio ratio-16x9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/PyakRSni-c0?si=_XgRaDVhxMKf1t-I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}
