import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
        <h3>My name is {person.firstName}</h3>
        {/*the above line shows using curly braces to escape into javascript*/}
        <MyButton/>
        <ul>{listItems}</ul>
    </div>
  );
}

// React apps are made out of components.
// A component is a piece of the UI (user interface) that has its own logic and appearance.
// A component can be as small as a button, or as large as an entire page.
// React components must always start with a capital letter while html is always lowercase
// React components are JavaScript functions that return markup:
function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    );
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


let person = {
    firstName: "Anthony",
    lastName: "Gonzales"
}

export default App;
