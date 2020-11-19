import React from 'react';
import { Link } from 'react-router-dom'



const Users = ({greetingMessage = 'Hi There', match}) => (
  <div>
    <h2>Users</h2>
    <p> {greetingMessage}, this is my awesome Users component. my user number is: <strong>ID: {match.params.id}</strong></p>
    <Link to="/Home">Voltar à Home</Link>
  </div>
);

// class Users extends React.Component {
//   constructor(props) {
//     super(props);
//      this.state = { greetingMessage: 'Hi There' };
//   }
//   render() {
//     const { greetingMessage } = this.state
//     const { id } = this.props.match.params;
 
//   return (
//     <div>
//       <h2> Users </h2>
//       <p> {greetingMessage} My awesome Users component, my identification number is {id} </p>
//       <Link to="/Home">Voltar à Home</Link>
//     </div>
// )
// }
// } 


export default Users;