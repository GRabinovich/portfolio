import fastDeliveryImage from "../assets/FastDelivery.webp"
import coworkP5Image from "../assets/CoworkP5.webp"
import devBooksImage from "../assets/DevBooks.webp"
import tmdbImage from "../assets/TMDB.webp" 
import gameOfLifeImage from "../assets/GameOfLife.webp"
import weatherChannelImage from "../assets/WeatherChannel.webp"
import toDoListImage from "../assets/ToDoList.webp"
import colorGameImage from "../assets/ColorGame.webp"
import typerDImage from "../assets/TyperD.webp"

export const Applications = () => {
  return [
    {
      name: "Fast Delivery",
      description: 
      "App para empresa logística de última milla con numerosos repartidores. Permite monitoreo, asignación y reasignación de paquetes, así como intervención en casos necesarios.",
      demoAvailable: false,
      repoLinks: {
        backEndLink: "https://github.com/Tute22/Chacurbanos-back",
        frontEndLink: "https://github.com/Tute22/Chacurbanos-front",
      },
      technologies: ["HTML", "CSS", "TypeScript", "Node.js", "Nest.js", "MongoDB", "Mongoose", "React", "Next.js", "Vite.js", "Tailwind CSS", "Docker", "Jest", "Github Actions"],
      img: fastDeliveryImage,
    },
    {
      name: "Cowork P5",
      description: "Aplicación mobile/web que permite la reserva de turnos al staff y alumnos de Plataforma 5 para ir a trabajar a sus oficinas, permitiendo la administración de la cantidad de alumnos y staff en la locación.",
      demoAvailable: true,
      demo: "https://drive.google.com/file/d/1lt3gxivKmq1RHVHFvIlPhCd_Id-yGJgE/view?usp=sharing",
      repoLinks: {
        backEndLink: "https://github.com/darioberatti/co-work-backend",
        frontEndLink: "https://github.com/darioberatti/Co-Work-P5-FRONTEND",
      },
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL", "Sequelize", "React", "Next.js", "Redux", "Radix UI", "Material UI"],
      img: coworkP5Image,
    },
    {
      name: "DevBooks",
      description: "Aplicación que ofrece una amplia selección de libros de programación, desarrollo web y tecnología que se pueden comprar.",
      demoAvailable: true,
      demo: "https://drive.google.com/file/d/1GsXVHwRA3WHUTRzh1lYlT6JxeZuBzUf5/view?usp=sharing",
      repoLinks: {
        link: "https://github.com/Francisco-Villanueva/eccomerce-book",
      },
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL", "Sequelize", "React", "Vite.js", "Material UI"],
      img: devBooksImage,
    },
    {
      name: "TMDB",
      description: "Sitio que contiene películas y series con su información detallada.",
      demoAvailable: true,
      demo: "https://drive.google.com/file/d/1_eXMhlLFyaM0FqwRnmm59z9i2UEw_-g3/view?usp=sharing",
      repoLinks: {
        link: "https://github.com/GRabinovich/new-tmdb",
      },
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL", "Sequelize", "React", "Material UI"],
      img: tmdbImage,
    },
    {
      name: "Game of Life",
      description: "Inspirado en el famoso Conway's Game of Life, es un autómata celular cuyo propósito es generar comportamientos complejos a través de reglas.",
      demoAvailable: true,
      demo: "https://game-of-life-gaston-rabinovich.netlify.app/",
      repoLinks: {
        link: "https://github.com/GRabinovich/Mi-Game-of-Life",
      },
      technologies: ["HTML", "CSS", "JavaScript"],
      img: gameOfLifeImage,
    },
    {
      name: "Weather Channel",
      description: "Descubre el clima actual en cualquier ciudad del mundo al instante solo ingresando su nombre.",
      demoAvailable: true,
      demo: "https://wheater-channel-gaston-rabinovich.netlify.app/",
      repoLinks: {
        link: "https://github.com/GRabinovich/weather-channel",
      },
      technologies: ["HTML", "CSS", "JavaScript"],
      img: weatherChannelImage,
    },
    {
      name: "To do List",
      description: "Aplicación para anotar, editar y eliminar tareas.",
      demoAvailable: true,
      demo: "https://to-do-list-gaston-rabinovich.netlify.app/",
      repoLinks: {
        link: "https://github.com/GRabinovich/to-do-list",
      },
      technologies: ["HTML", "CSS", "JavaScript"],
      img: toDoListImage,
    },
    {
        name: "Color Game",
        description: "Adiviná cual es el color correcto a través de su código rgb.",
        demoAvailable: true,
        demo: "https://color-game-the-great-guessing-game.netlify.app/",
        repoLinks: {
            link: "https://github.com/GRabinovich/color-game",
        },
        technologies: ["HTML", "CSS", "JavaScript"],
        img: colorGameImage,
    },
    {
        name: "Typer D",
        description: "Acumula la mayor cantidad de puntos posibles escribiendo las palabras que aparecen en pantalla lo más rápido posible.",
        demoAvailable: true,
        demo: "https://typer-d-3000.netlify.app/",
        repoLinks: {
            link: "https://github.com/GRabinovich/typer-d",
        },
        technologies: ["HTML", "CSS", "JavaScript"],
        img: typerDImage,
    }
  ];
};
