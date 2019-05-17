const content = require('../static/content.json');
const links = content.links;

function makeList () {
  return links.map((item, i) => (
    <li key={i}><a href={item.url} target="_blank">{item.title}</a></li>
  ));
}

export default () => (
  <ul>
    {makeList()}
  </ul>
);