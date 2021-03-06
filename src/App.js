import React, { useContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navbar from './common/Navbar';
import Beans from './features/Beans.js'
import { AppContext } from './app/AppContext.js'
import EditBean from './features/editBean';
import Home from './common/Home';
import AddBean from './features/AddBean';

const queryClient = new QueryClient();

function App() {

  return (<>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Home>
          <Beans />
          <AddBean />
        </Home>
      </QueryClientProvider>
    </BrowserRouter>

  </>
  )
}

export default App;