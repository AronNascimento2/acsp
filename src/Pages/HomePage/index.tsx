import { useState } from "react";
import "./styles.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const OrchestraLandingPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      subject: subject,
    };

    emailjs
      .send(
        "service_nsccokl",
        "template_mdoux2p",
        templateParams,
        "vOFphkyds17Mdtkhn"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("e-mail enviado com sucesso", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Não foi possivel enviar o email !", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="orchestra-page">
      <header>
        <div className="img-logo">
          <img src="acsplogo.jpg" alt="acsplogo" style={{ width: "100px" }} />
          <p className="acsp">Academia de cordas de São Paulo</p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#about">Início</a>
            </li>
            <li>
              <a href="#events">Concertos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="about">
        <div className="video-container">
          <video autoPlay muted loop>
            <source src="/acspvideo.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      </section>
      <section id="events">
        <div className="event-list">
          <div className="event">
            <div className="concerts">
              <div className="concert-item">
                <img src="Quarteto.jpg" alt="" /> 
                <div className="description">
                  <div className="content-description">
                    <h3 className="title">Chamber Concerts Series</h3>
                    <p className="text">
                      Orgulhosamente a orquestra Academia de Cordas de São Paulo
                      promove a série de concertos camerísticos "CHAMBER
                      CONCERTS SERIES", em belos espaços alternativos da cidade
                      de São Paulo. Neste concerto teremos a presença do
                      quarteto de cordas da ACSP apresentando obras clássicas de
                      Albinoni, Mozart e Haydn, em concertos contextualizados e
                      explicativos de uma forma dinâmica e sem sisudez. Essa
                      experiência traz ao público um concerto de alto nível
                      artístico em um dos ambientes mais aconchegantes da
                      cultura paulistana, a Associação Cultural Cachuera. *OBS:
                      os assentos não possuem numeração
                    </p>
                    <p className="text">
                      PROGRAMA: <br />
                      -T. Albinoni: Sinfonia a 4 <br />
                      -W. A. Mozart:Quarteto N.3 em Sol Maior K.156 <br />
                      -J. Haydn: Quarteto op.33 N.2 (The Joke)
                      <br />
                      Duração: 60 min.
                    </p>
                    <a
                      href="https://www.sympla.com.br/evento/chamber-concerts-series/2272449?referrer=www.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Comprar ingressos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container-contact">
          <h2>Entre em Contato</h2>
          <div className="container-form">
            <form onSubmit={sendEmail} className="contact-form">
              <div className="inputs">
                <div className="decription">
                  <div className="message-label">
                    <label htmlFor="name" className="title">
                      Nome:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                </div>
                <div className="decription">
                  <div className="message-label">
                    <label htmlFor="name" className="title">
                      Assunto:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                    />
                  </div>
                </div>
                <div className="decription">
                  <div className="message-label">
                    <label htmlFor="email" className="title">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                </div>
              </div>
              <div className="decription-message">
                <div className="message-label">
                  <label htmlFor="message" className="title">
                    Mensagem:
                  </label>
                  <textarea
                    className="message"
                    id="message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                </div>
                <input className="button" type="submit" value="Enviar" />
              </div>
            </form>
          </div>
        </div>
      </section>
        <footer>
          <p>&copy; {getCurrentYear()} ACSP. Todos os direitos reservados.</p>
        </footer>
    </div>
  );
};
