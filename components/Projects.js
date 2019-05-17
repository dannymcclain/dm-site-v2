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
  for (var i = 0; i < projects.length; i++) {
    console.log(projects[i], i);
    // return (<li><a href={projects[i].url} target="_blank">{projects[i].title}</a></li>);
}
};

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