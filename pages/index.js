import Head from 'next/head';
import Emoji from 'a11y-react-emoji';
import Projects from '../components/Projects.js';
import '../styles/styles.scss';

const fruit = require('../static/fruit.json');

export default () => (
  <div className="app">
    <Head>
      <title>Danny McClain</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="../static/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="../static/favicon/favicon-16x16.png"
      />
      <link rel="shortcut icon" href="../static/favicon/favicon.png" />
      <link
        href="https://fonts.googleapis.com/css?family=Overpass+Mono:400,700"
        rel="stylesheet"
      />
    </Head>
    <div className="border" />
    <header>
      <h1>
        {fruit.header.headline}
      </h1>
      <p>
        {fruit.header.text}
      </p>
    </header>
    <section className="about">
      <h2>{fruit.about.headline}</h2>
      <p>{fruit.about.text}</p>
    </section>
    <section className="projects">
      <h2>
        Misc. Projects <Emoji symbol="🚀" />
      </h2>
      <ul className="project-list"> 
        <Projects />
        <li>
          <a href="https://pensive-joliot-ed3c84.netlify.com" target="_blank">
            Ratio
          </a>
        </li>
        <li>
          <a href="https://frosty-hypatia-1693bf.netlify.com" target="_blank">
            Grid Calc
          </a>
        </li>
      </ul>
      <p>
        View more of my work on{' '}
        <a href="https://dribbble.com/dannymcclain" target="_blank">
          Dribbble
        </a>
        .
      </p>
    </section>
    <section className="currently">
      <h2>
        Currently <Emoji symbol="⌚️" />
      </h2>
      <p>
        I’m currently designing digital experiences that help people get a smile
        they’re proud of at{' '}
        <a href="https://smiledirectclub.com" target="_blank">
          SmileDirectClub
        </a>
        .
      </p>
    </section>
    <section className="links">
      <h2>
        Links <Emoji symbol="🔗" />
      </h2>
      <ul>
        <li>
          <a href="https://dribbble.com/dannymcclain" target="_blank">
            Dribbble
          </a>
        </li>
        <li>
          <a href="https://github.com/dannymcclain" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://twitter.com/dannymcclain" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="mailto:dannyxmcclain@gmail.com" target="_blank">
            Email
          </a>
        </li>
      </ul>
    </section>
  </div>
);
