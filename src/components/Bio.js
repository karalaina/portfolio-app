import React from 'react';

class Bio extends React.Component {
  render() {
    return (
        <div>
            <h1>Kara Campbell</h1>
            {/* TO DO: remove inline style */}
            <img style={{width: '200px'}} src={require('../images/profile.jpg')} alt=""/>
            <p>Description of me!</p>
            <a href="https://github.com/karalaina">GitHub</a>
            <a href="https://www.linkedin.com/in/kara-campbell-b9063110b/">LinkedIn</a>
        </div>
    )
  }
}

export default Bio;
