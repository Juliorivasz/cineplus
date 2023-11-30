import '../assets/css/footer.css';

export const Footer = () => {
  return (
    <footer className="text-center">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#3b5998', borderRadius: '45%' }}
            href="https://www.facebook.com/juliorivasz/"
            role="button"
          >
            <i className="bi bi-facebook"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#55acee', borderRadius: '45%'  }}
            href="https://twitter.com/juliorivasdev"
            role="button"
          >
            <i className="bi bi-twitter"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#dd4b39', borderRadius: '45%'  }}
            href="https://juliorivasz.github.io/PortFolio/"
            role="button"
          >
            <i className="bi bi-google"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#ac2bac', borderRadius: '45%'  }}
            href="https://www.instagram.com/julio_rivas17/"
            role="button"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#0082ca', borderRadius: '45%'  }}
            href="https://www.linkedin.com/in/julio-rivas-frontend/"
            role="button"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#111', borderRadius: '45%'  }}
            href="https://github.com/Juliorivasz/"
            role="button"
          >
            <i className="bi bi-github"></i>
          </a>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(2, 2, 2, .5)' }}>
        © 2023 Copyright:
        <a className="text-white ms-3" href="https://juliorivasz.github.io/PortFolio/" >
          JulioRivasz
        </a>
      </div>
    </footer>
  );
};

