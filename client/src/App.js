import React, { useContext, useState } from 'react';
import { Theme } from 'react-daisyui';
import Navbar from './common/Navbar';
import Beans from './features/beans/Beans.js'
import {AppContext, AppProvider} from './app/AppContext.js'
import EditBean from './features/edit-bean/editBean';

function App() {

  const appContext = useContext(AppContext);

  return (<>
      <Theme dataTheme='mytheme'>
        <Navbar />
        <Beans />
        <EditBean />
      </Theme>
  </>
  )
}

export default App;
