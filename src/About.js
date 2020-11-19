import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p> My awesome About component </p>
        <Link to="/Home">Voltar à Home</Link>
      </div>
    )
  }
}

export default About;