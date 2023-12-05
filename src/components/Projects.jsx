import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Aplicação em React consumindo API",
      description: "Desenvolvida em ReactJS, consome uma API de filmes.",
      imgUrl: projImg1,
      LinkGITHUB: "https://github.com/GuilhermeMoitinho/React_APIFilmes"
    },
    {
      title: "API desenvolvida em .NET/C#",
      description: "Utiliza Entity Framework, SQL Server e .NET/C#.",
      imgUrl: projImg2,
      LinkGITHUB: "https://github.com/GuilhermeMoitinho/WebApi"
    },
    {
      title: "Startup de Negócios",
      description: "Desenvolvida com Dapper, SQL Server e C#/.NET.",
      imgUrl: projImg3,
      LinkGITHUB: "https://github.com/GuilhermeMoitinho/Api_Dapper"
    },
    {
      title: "Aplicação de Produtos com ASP.NET MVC",
      description: "Utiliza Bootstrap, jQuery e C#/.NET.",
      imgUrl: projImg4,
      LinkGITHUB: "https://github.com/GuilhermeMoitinho/IBID_CRUD"
    },
    {
      title: "Aplicação de Fornecedores com ASP.NET MVC",
      description: "Utiliza Bootstrap, jQuery e C#/.NET.",
      imgUrl: projImg5,
      LinkGITHUB: "https://github.com/GuilhermeMoitinho/ASP.NET_CRUD"
    },
    {
      title: "Aplicação Full-Stack",
      description: "Desenvolvida em JavaScript e C#/.NET.",
      imgUrl: projImg6,
      LinkGITHUB: "https://github.com/GuilhermeMoitinho/LandingPageApplication"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Confira alguns dos meus projetos, cada um utilizando tecnologias específicas para atender às necessidades. Desde aplicações em ReactJS até APIs robustas em .NET/C#, cada projeto representa um desafio superado.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projeto 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projeto 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Projeto 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p> <h3><b>Em construção...</b> </h3><br /> Explore os detalhes do Projeto 2 e suas tecnologias envolvidas. Saiba como utilizei Entity Framework, SQL Server e .NET/C# para criar uma API robusta e eficiente.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p><h3><b>Em construção...</b> </h3><br />Descubra mais sobre o Projeto 3, uma Startup de Negócios. Com Dapper, SQL Server e C#/.NET, desenvolvi uma solução eficaz e inovadora para as necessidades do cliente.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Imagem de fundo"></img>
    </section>
  )
}
