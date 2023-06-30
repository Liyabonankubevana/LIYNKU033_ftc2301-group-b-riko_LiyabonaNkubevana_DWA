ReactDOM.render(<h1>Let's start React(first excercise)</h1>, document.getElementById("root"));

// Excercise 2, Creating an unordered list using reactDOM
ReactDOM.render(
<ul><li>Food</li><li>Drinks</li><li>Dessert</li></ul>,
document.getElementById("main")
);

/**
 * Excercise 3 - Why we care to learn react?
 * It allows us to write composable code. The idea that you take small pieces to build a larger code base. 
 * 
 */

// Initialize a main content funtion 
function MainContent() {
    return (
        <div>
            <h1>Main Content(third excercise)</h1>
            <p>Welcome to my first attempt at building using react framework. Let us struugle together trying to figure this out</p>
            <form className="Form-inline">
                <input className="Form input"/>
                <button className="button">Submit</button>
            </form>
        </div>
    )
};

// Render it using the React dom
ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("main")
); 


/**
 *Excercise 4 - Another reason why we love react is because it is declaritive (Tell me what to do and I'll worry about how to get it done).
 * It's (declaritive) opposite is called imperitive (We need to tell it how to do it).
 * React allows us to write declaritively in a maintainable way especiallyif you are building complicated websites and UI's
 * Challenge - recreate the above line of code in vannilla JS by creating and appending an h1 to our div#root (without using innerHTML).
 */

 const h1 = document.createElement("h1");
 h1.textContent = "This is an imperitive way to program";
 h1.className = "header";
 document.getElementById("main").append(h1); 

 /**
  * Excercise 4 - JSX was created early and to think of it as a flavor JS and HTML and that made it declaritive.
  *  Benefit is to write the HTML with JS. 
  * To help understand try and understand the difference between vanilla js and React
  * Make sure that we are returning a single parent element. 
  */

 const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
 );

 console.log(page)

 ReactDOM.render(
    page,
    document.getElementById("root")
 );

const navbar = (
    <nav className="Navbar">
        <h1>WorkersLife</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navbar,
    document.getElementById("main")
)

// Self-Practice React
const buttonInput = (
    <form>
        <div>
            <p>Please provide your name:</p>
            <input className="input" required></input>
            <button className="Press">Press</button>
        </div>
    </form>
)

ReactDOM.render(
    buttonInput,
    document.getElementById("main")
)