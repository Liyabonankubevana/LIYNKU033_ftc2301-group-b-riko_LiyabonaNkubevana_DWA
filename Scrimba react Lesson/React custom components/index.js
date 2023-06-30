/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

import React from "react"
import  ReactDOM from "react-dom"
import { Header } from "./Components/Header"
import { MainContent } from "./Components/MainContent"
import { Footer } from "./Components/Footer"

/**
 * Creating Parent/child components. (See compotent folder to see how that was done and how it relates to the Page function)
 * Very useful in a large application where you have a large code base and you are trying to insert custom components. 
 * 
 * HEADER, Maincontent and Footer
 */

const Page = () => {
    return(
    <div>
        <Header />

        <MainContent />
        
        <Footer />
    </div>   
    )
}

ReactDOM.render(
    <Page />,
    document.getElementById("root")
)


/**
 * CUSTOM COMPONENT QUIZ 
 * 
 * 1. WHAT IS A REACT COMPONENT? 
 * 
 * A function that returns React elements. (UI) 
 * 
 * 2. WHAT IS WRONG WITH THIS CODE? 
 * 
 * function myComponents() {
 * return(
 * <small>I'm tiny text!</small>
 * )
 * }
 * 
 * ANSWER: The code doesn't use  pascalcase naming convention and that is a requirement in react functions.
 * 
 * 3. WHAT IS WRONG WITH THIS CODE?
 * 
 * function Header() {
 * return(
 * <header>
            <nav>
                <img src="./react-logo.png" alt="React logo" width="40px"></img>
            </nav>
    </header>
 * }
 * ReactDOM.render(
    Header(),
    document.getElementById("root")
) 

* ANSWER: When the function is called again it should be <Header />
*
*
 */