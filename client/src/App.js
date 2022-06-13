import React, { useState } from 'react';
import { Button, Theme } from 'react-daisyui';
import Navbar from './common/Navbar';
import Coffees from './features/coffees/Coffees';

function App() {

  const [searchQuery, setSearchQuery] = useState("");

  function handleSearchQueryChange(string) {
    setSearchQuery(string)
  }

  return (<>
    <Theme dataTheme='mytheme'>
      <Navbar onSearchQueryChange={handleSearchQueryChange} searchQuery={searchQuery} />
      <Coffees searchQuery={searchQuery} />
    </Theme>
  </>
  )
}

export default App;
