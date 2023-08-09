// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import SignInPage from './Pages/Login'
import SignUpPage from './Pages/signUp'
import HomePage from './Pages/Home'
import SearchPage from './Pages/Search'
import FavouritesPage from './Pages/Favourites'
import ErrorPage from './Pages/Error'
import LoadingPage from './Components/Loading'
import PrivateRoutes from './Utils/PrivateRoutes';


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
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} exact/>
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/Favourites" element={<FavouritesPage />} />
          </Route>
      
          <Route index element={<Landing />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/Login" element={<SignInPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path='*' element={<ErrorPage />} />
        
        </Routes>
      </Router>
    </>
  )
}

export default App
