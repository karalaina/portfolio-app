import React from 'react';
import Bio from './Bio';
import Work from './Work';

class App extends React.Component {
  render() {
    return (
      <main>
        <Bio />
        <Work />
      </main>
    )
  }
}

export default App;
