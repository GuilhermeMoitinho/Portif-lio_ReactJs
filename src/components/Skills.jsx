/* eslint-disable react/no-unescaped-entities */
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skillsList = [
    { image: meter1, title: '.NET C#' },
    { image: meter1, title: 'ReactJs' },
    { image: meter2, title: 'TypeScript' },
    { image: meter3, title: 'Angular' },
    { image: meter1, title: 'jQuery' },
    { image: meter2, title: 'HTML/CSS' },
    { image: meter3, title: 'Bootstrap' },
    { image: meter1, title: 'ASP.NET Core MVC' },
    { image: meter2, title: 'LINQ' },
    { image: meter3, title: 'Testes Unitários' },
    { image: meter1, title: 'Entity Framework Core' },
    { image: meter2, title: 'Scrum' },
    { image: meter3, title: 'MySQL' },
    { image: meter1, title: 'MongoDB' },
    { image: meter2, title: 'SQL Server' },
    { image: meter2, title: 'Docker' },  
    { image: meter2, title: 'Microsserviços' },  
    { image: meter2, title: 'RabbitMQ' },  
    { image: meter3, title: 'Azure' },
    { image: meter1, title: 'Repository pattern' },
    { image: meter2, title: 'Princípios de Clean Code' },
    { image: meter3, title: 'Git/GitHub' }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Habilidades</h2>
              <p>
                Sou um desenvolvedor com experiência sólida e apaixonado por tecnologia. Foco principalmente em desenvolvimento Back-end, utilizando .NET C# e ASP.NET Core MVC. Além disso, possuo conhecimentos em TypeScript, Angular, jQuery, HTML/CSS, Bootstrap e boas práticas de arquitetura e desempenho de código. Ao longo dos anos, adquiri experiência significativa, trabalhando em diversos projetos e entregando resultados excepcionais de forma colaborativa, sempre cumprindo prazos estabelecidos.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skillsList.map((skill, index) => (
                  <div key={index} className="item">
                    <img src={skill.image} alt="Image" />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
