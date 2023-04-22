import Portfolio from "../images/portfolio.png"
import Socialmedia from "../images/socialmedia.png"
import Pokedex from "../images/pokedex.png"
import Todolist from "../images/todolist.png"
import Pomodoro from "../images/pomodoro.png"
import Rocketflix from "../images/rocketflix.png"
import Smartninja from "../images/smartninja.png"
import Eduford from "../images/Eduford.png"

const projetos = [
    {
      img: Portfolio,
      nome: 'Portfólio',
      descricao: 'Meu Website de portfólio para exibir meus projetos de programação.',
      tipo: 'Últimos',
      techs: "ReactJs · Sass · EmailJs",
      link: "https://flavioalexandredev.com",
      github: "https://github.com/ClarkAshida/Pokedex-React-App"
    },
    {
      img: Socialmedia,
      nome: 'Social Media App',
      descricao: 'Um WebApp de Rede Social para criação e interação de posts com outros usuários.',
      tipo: 'Web Apps',
      techs: "ReactJs · Hooks · CSS · Firebase",
      link: "https://social-media-app-832ed.web.app/",
      github: "https://github.com/ClarkAshida/Pokedex-React-App"
    },
    {
      img: Pokedex,
      nome: 'Pokedex App',
      descricao: 'Um WebApp de Pokedex para acessar dados de Pokemons consumindo a Pokeapi.',
      tipo: 'Últimos',
      techs: 'ReactJs · Hooks · CSS · Pokeapi',
      link: 'https://pokedex-react-app-swart.vercel.app/',
      github: 'https://github.com/ClarkAshida/Pokedex-React-App'
    },
    {
        img: Todolist,
        nome: 'To-Do List App',
        descricao: 'Um Web App de lista de tarefas para listar e organizar uma rotina mais produtiva.',
        tipo: 'Web Apps',
        techs: 'HTML · CSS · JavaScript',
        link: 'https://clarkashida.github.io/To-do-List-Javascript/',
        github: 'https://github.com/ClarkAshida/To-do-List-Javascript'
    },
    {
        img: Pomodoro,
        nome: 'Pomodoro App',
        descricao: 'Um WebApp contador Pomodoro para manter a produtividade em atividades que necessitam manter o foco.',
        tipo: 'Web Apps',
        techs: 'HTML · CSS · JavaScript',
        link: 'https://clarkashida.github.io/Pomodoro-Timer-Javascript/',
        github: 'https://github.com/ClarkAshida/Pomodoro-Timer-Javascript'
    },
    {
        img: Rocketflix,
        nome: 'Rocktflix App',
        descricao: 'Um WebApp para encontrar filmes interessantes quando você não sabe o que assistir, consumindo a MDB Api.',
        tipo: 'Web Apps',
        techs: 'HTML · CSS · JavaScript · IMD API',
        link: 'https://randommovies.netlify.app/',
        github: 'https://github.com/ClarkAshida/Rocketflix'
    },
    {
        img: Smartninja,
        nome: 'E-commerce SmartNinja',
        descricao: 'Um E-commerce para venda de smartphones feito com o Wordpress e Woocommerce.',
        tipo: 'Últimos',
        techs: 'Wordpress · Elementor · Woocommerce',
        link: 'https://lojavirtual.ninjadosplugins.com/',
        github: 'https://lojavirtual.ninjadosplugins.com/'
    },
    {
        img: Eduford,
        nome: 'Eduford',
        descricao: 'Um Website institucional e responsivo para divulgar os cursos e serviços da universidade Eduford.',
        tipo: 'Landing Pages',
        techs: 'HTML · CSS · JavaScript',
        link: 'https://kiro0oz.github.io/EDUford-html-css/index.html',
        github: 'https://github.com/ClarkAshida/Website-Responsivo-HTML-e-CSS'
    },
];

export default projetos;