/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Desenvolvedor C#/.NET"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bem-vindo ao meu Portfólio</span>
                <h1>{`Oi! Me chamo Guilherme Moitinho, sou um `} <br/> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Desenvolvedor C#/.NET"]'><span className="wrap">{text}</span></span></h1>
                  <p>Olá, meu nome é Guilherme Moitinho e eu sou um desenvolvedor Back-end altamente motivado e apaixonado por tecnologia. Com uma sólida base em HTML/CSS, JavaScript, mas com foco principal em C#/.NET. Venho estudando e me especializando em boas práticas e arquiteturas que melhorem o desempenho dos meus códigos. Venho ganhando experiência na área da programação a mais de 2 anos, Tive experiências em projetos freelancers, e com eles, adquiri a capacidade de trabalhar de forma colaborativa, entregando resultados excepcionais dentro dos prazos estabelecidos.</p>
                  <a className="TalkToMForWhats" href="https://api.whatsapp.com/send?phone=71981642759&text=Olá, tudo bem Guilherme?"target="_blank" onClick={() => console.log('connect')}>Fale comigo! <ArrowRightCircle size={25} /></a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Imagem do Cabeçalho"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
