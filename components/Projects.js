const content = require('../static/content.json');
const projects = content.projects;

function makeList () {
  return projects.map((item, i) => (
    <li key={i}><a href={item.url} target="_blank">{item.title}</a></li>
  ));
}

export default () => (
  <ul>
    {makeList()}
  </ul>
);