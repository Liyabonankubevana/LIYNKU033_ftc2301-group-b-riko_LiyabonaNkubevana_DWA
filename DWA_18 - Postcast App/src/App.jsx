// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'
import Landing from './Pages/Landing'
import SignInPage from './Pages/Login'
import SignUpPage from './Pages/signUp'
import HomePage from './Pages/Home'
import SearchPage from './Pages/Search'
import FavouritesPage from './Pages/Favourites'
import ErrorPage from './Pages/Error'
import LoadingPage from './Components/Loading'


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Switch>
          <Route index element={<Landing />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/Login" element={<SignInPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path='*' element={<ErrorPage />} />
          
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/Favourites" element={<FavouritesPage />} />
          </Switch>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
