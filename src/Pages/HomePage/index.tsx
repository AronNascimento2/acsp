import { useEffect, useState } from "react";
import "./styles.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

export const OrchestraLandingPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Novo estado para controlar o botão

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação (em ms)
      once: true, // Se true, a animação ocorre apenas uma vez
    });
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      // Se o usuário rolar mais do que 400 pixels, mostrar o botão
      if (window.pageYOffset > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Adicionar event listener para verificar o scroll
    window.addEventListener("scroll", handleScroll);

    // Remover event listener quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("Por favor, preencha todos os campos!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return; // Impedir o envio se algum campo estiver vazio
    }
    setIsButtonDisabled(true); // Desabilitar o botão ao enviar o formulário

    const templateParams = {
      from_name: name,
      message: message,
      from_email: email,
      subject: subject,
    };

    emailjs
      .send(
        "service_nsccokl",
        "template_s0ujjdn",
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
            onClose: () => {
              setTimeout(() => {
                setIsButtonDisabled(false); // Habilita o botão após o toast ser fechado
              }, 4000);
            },
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Não foi possível enviar o email!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            onClose: () => {
              setTimeout(() => {
                setIsButtonDisabled(false); // Habilita o botão após o toast ser fechado
              }, 4000);
            },
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
          <img src="acsplogo.jpg" alt="acsplogo" style={{ width: "50px" }} />
          <p className="acsp">Academia de cordas de São Paulo</p>
        </div>
      </header>
      {showButton && (
        <section id="to-top">
          <button
            className="to-top-button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Voltar ao topo
          </button>
        </section>
      )}
      <section id="about">
        <div className="video-container">
          <video autoPlay muted loop>
            <source src="/acspvideo.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      </section>
      <section id="events" data-aos="fade-up">
        <div className="event-list">
          <div>
            <h3 className="title">Chamber Concerts Series</h3>
            <div className="content-description">
              <p className="text">
                Orgulhosamente a orquestra Academia de Cordas de São Paulo
                promove a série de concertos camerísticos "CHAMBER CONCERTS
                SERIES", em belos espaços alternativos da cidade de São Paulo.
                Neste concerto teremos a presença do quarteto de cordas da ACSP
                apresentando obras clássicas de Albinoni, Mozart e Haydn, em
                concertos contextualizados e explicativos de uma forma dinâmica
                e sem sisudez. Essa experiência traz ao público um concerto de
                alto nível artístico em um dos ambientes mais aconchegantes da
                cultura paulistana, a Associação Cultural Cachuera. *OBS: os
                assentos não possuem numeração
              </p>

              <a
                href="https://www.sympla.com.br/evento/chamber-concerts-series/2272449?referrer=www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button-buy"
              >
                Comprar ingressos
              </a>
            </div>
            <div className="content-description">
              <p className="text">
                PROGRAMA: <br />
                -T. Albinoni: Sinfonia a 4 <br />
                -W. A. Mozart:Quarteto N.3 em Sol Maior K.156 <br />
                -J. Haydn: Quarteto op.33 N.2 (The Joke)
                <br />
                Duração: 60 min.
              </p>
              <img src="Quarteto.jpg" alt="" className="image" />
            </div>
          </div>
        </div>
      </section>
      <section id="members" data-aos="fade-left">
        <h2 className="title-members">Membros do Quarteto</h2>
        <div className="members-grid">
          <div className="member">
            <img src="Rodrigo.jpg" alt="Membro 1" className="member-img" />
            <p>Rodrigo Leite</p>
          </div>
          <div className="member offset">
            <img src="ligia.jpg" alt="Membro 2" className="member-img" />
            <p>Ligia Machado</p>
          </div>
          <div className="member">
            <img src="Aron.jpg" alt="Membro 3" className="member-img" />
            <p>Aron Nascimento</p>
          </div>
          <div className="member offset2">
            <img src="Cassiano.jpg" alt="Membro 4" className="member-img" />
            <p>Cassiano</p>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container-contact">
          <h2 className="title">Entre em Contato</h2>
          <div className="container-form">
            <form onSubmit={sendEmail} className="contact-form">
              <div className="inputs">
                <div className="decription">
                  <div className="message-label">
                    <label htmlFor="name" className="title-input">
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
                    <label htmlFor="name" className="title-input">
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
                    <label htmlFor="email" className="title-input">
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
                  <label htmlFor="message" className="title-input">
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
                <input
                  className="button"
                  type="submit"
                  value="Enviar"
                  disabled={isButtonDisabled}
                />
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
