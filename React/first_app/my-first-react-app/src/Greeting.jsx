// function Greeting() {
//     return (
//     <div>
//       <h1>Test title</h1>
//       <ol class="test-list">
//         <li>List item 1</li>
//         <li>List item 2</li>
//         <li>List item 3</li>
//       </ol>
//       <svg >
//          <circle cx="25" cy="75" r="20" stroke="green" stroke-width="2" />
//       </svg>
//       <form><input type="text"/></form>
//     </div>
//     );
//   }
// const people = [{
//   id: 0,
//   name: 'Creola Katherine Johnson',
//   profession: 'mathematician',
// }, {
//   id: 1,
//   name: 'Mario José Molina-Pasquel Henríquez',
//   profession: 'chemist',
// }, {
//   id: 2,
//   name: 'Mohammad Abdus Salam',
//   profession: 'physicist',
// }, {
//   name: 'Percy Lavon Julian',
//   profession: 'chemist',  
// }, {
//   name: 'Subrahmanyan Chandrasekhar',
//   profession: 'astrophysicist',
// }];

// const chemists = people.filter(person =>
//   person.profession === 'chemist'
// );

// function Greeting() {
//     const listItems = chemists.map(person =>
//       <p>
//       <b>{person.name}:</b>
//       {' ' + person.profession + ' '}
//       known for {person.accomplishment}
//     </p>
//     );
//     return <ul>{listItems}</ul>;
//   }
 

//   export default Greeting;

import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const everyoneElse = people.filter(person =>
    person.profession !== 'chemist'
  );
  const listItems = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
