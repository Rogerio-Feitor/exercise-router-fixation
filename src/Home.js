import React from 'react';
import { Link } from 'react-router-dom';



class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/Users/10">Users</Link><br /><br />
        <Link to="/About">About</Link><br /><br />
        <h2> Home </h2>
        <p> My awesome Home component </p>
      </div>

    )
  }
}

export default Home;