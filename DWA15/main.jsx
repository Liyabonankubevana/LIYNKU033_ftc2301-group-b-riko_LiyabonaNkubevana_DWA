// eslint-disable-next-line no-unused-vars
import React from "react"
import  ReactDOM from "react-dom/client"
import NavBar from "./Components/Navbar"
import MainContent from "./components/MainContent"
import Footer from "./Components/Footer"
import './index.css'



// eslint-disable-next-line react-refresh/only-export-components
const Page = () => {
    return(
    <div>
        <NavBar />,

        <MainContent />,
        
        <Footer />
    </div>   
    )
}

ReactDOM.createRoot(document.getElementById('root'))
.render(<Page />);

