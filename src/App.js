import './App.css';
import {useState} from "react";

function App() {
    const [count,setCount] = useState(0);

    function handleClick(){
        setCount(count + 1)
    }
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
        <h3>My name is {person.firstName}</h3>
        {/*the above line shows using curly braces to escape into javascript*/}
        <MyButton/>
        <ul>{listItems}</ul>
        <ButtonWithCount count={count} onClick={handleClick}/>
        <br/>
        <ButtonWithCount count={count} onClick={handleClick}/>
    </div>
  );
}

let person = {
    firstName: "Anthony",
    lastName: "Gonzales"
}

// React apps are made out of components.
// A component is a piece of the UI (user interface) that has its own logic and appearance.
// A component can be as small as a button, or as large as an entire page.
// React components must always start with a capital letter while html is always lowercase
// React components are JavaScript functions that return markup:
function MyButton() {

//------------------------------------------------------
    // You can respond to events by declaring event handler
    // functions inside your components as shown below

    function handleCLick(){
        alert('You clicked the button')
    }
//-------------------------------------

    return (
        // to pass the event handler function to the button
        // call the onClick attribute and pass in the desired event handler\
        // notice how 'onClick={handleCLick}' has no parentheses at the end!
        // you are not calling the event handler - only passing it down
        // react will call the event handler when the user clicks the button
        <button onClick={handleCLick}>
            I'm a button
        </button>
    );
}

function ButtonWithCount({count, onClick}){

    // functions starting with use are called Hooks. Hooks are more
    // restrictive than other functions. You can only call Hooks at the top
    // of your components or other Hooks.
    // If you want to use useState in a condition or a loop
    // extract a new component and put it there

    //often, you'll want your compenent to remember some information
    // and display it. for example, maybe you want to count
    // the number of times a button is clicked
    // to do this add state to your component

    // const [count,setCount] = useState(0);

    // you'll get 2 things from useState
    //the current state (count)
    //and the function that lets you update it (setCount)
    // you can give them any names but the convention is to write
    // [something, setSomething]

    //----------GETTING COMPONENTS TO UPDATE TOGETHER
        // Often you'll need components to share data and
        // always update together. To make both MyButton components
        // components display the same count and update together
        // you need to move the state from the individual buttons 'upwards'
        // to the closest component containing all of them

        // First move the state up from ButtonWithCount into App
        // Then pass  the state down from App to each ButtonWithCount
        // (shown on line 17 and 19)
        // The information you pass down like this is called 'props'
        // Now the App component contains the count state and the
        // handleClick event handler and passes both of them down as props
        // to each of the buttons.
        // finally change ButtonWithCount to read the props you have passed
        // from its parent component (shown on line 112)
        // you must also pass the 'onClick' and 'count' to the function parameters
        //


    //---------------------------

    // function handleClick(){
    //     setCount(count + 1)
    // }

    //the first time the button is displayed, count will be 0
    // because you passed 0 to useState()
    // when you want to change the state, call setCount() and pass
    // the new value to it
    // clicking the button will increment the counter

    // ****if you render the same component multiple times
    // each will get its own state*****

    return(
        <button onClick={onClick}>
            Clicked {count} times
        </button>



    //     <button onClick={handleClick}>
    //         CLicked {count} times
    //     </button>
    )
}

//-------------------------------------------------------

//In React, there is no special syntax for writing conditions.
// Instead, you’ll use the same techniques as you use when writing regular JavaScript code.
// For example, you can use an if statement to conditionally include JSX:

// let content;
// if (isLoggedIn) {
//     content = <AdminPanel />;
// } else {
//     content = <LoginForm />;
// }
// // return (
//     <div>
//         {content}
//     </div>
// );

//-----------------------------------------------------

//---------------------------------------------------------

// You will rely on javascript features like for loop and array.map()
// to render lists of components
// For example - an array of products

const products = [
    {title: 'Cabbage', id: 1, isFruit: false},
    {title: 'Garlic', id: 2, isFruit: false},
    {title: 'Apple', id: 3, isFruit: true}
];

const listItems = products.map(product=>
<li
    key={product.id}
    // below shows using a regular object inside the
    //  'style={}' JSX curly braces as well as
    // conditional rendering based off of the 'isFruit' property
    // for each product
    style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
    }}
>
    {product.title}
</li>
);

// notice how the <li> has a 'key' attribute.
// for each item in a list, you should pass a string or a number
// that uniquely identifies that item among its siblings
// usually a key should be coming from your data, such as a database ID
// react uses your keys to know what happened if you later
// insert, delete, or reorder the items

//you would return this list into an unordered list as shown below
// return (
//     <ul>{listItems}</ul>
// );

//----------------------------------------------------------------





export default App;
