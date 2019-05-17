const fruit = require('../static/fruit.json');
const projects = fruit.projects;
// const projectsLength = projects.length;

// function list() {
//   for (var i = 0; i <= projects.length; i++) {
//     console.log(projects[i], i);
//   return (
//     <li><a href={projects[i].url} target="_blank">{projects[i].title}</a></li>
//     );
// }};

function list() {
  for (var i = 0; i <= projects.length; i++) {
    console.log(projects[i], i);
    return (<li><a href={projects[i].url} target="_blank">{projects[i].title}</a></li>);
}
};

export default () => (
  <ul>
    {list()}
  </ul>
);