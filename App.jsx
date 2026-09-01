import React from "react";
//simple function (not a component)
function add(a,b){
  return a+b ;
}
//React component
function Welcome(){
  return<h2>Welcome to my first React component</h2>
}
//Another Component
function Info(){
  return(
    <div>
      <h3>What is a Component?</h3>
      <p>A Component is a reusable piece of UI in React</p>
    </div>
  );
}
//Main App component
function App(){
  return(
    <div style = {{ padding: "20px", fontFamily:"Arial"}}>
    <h1>Your First React Component</h1>
    {/*Using Components*/}
      <Welcome />
      <Info/>
      <h3>How to use Components?</h3>
      <p>Use components like HTML tag: &lt; Welcome /&gt; </p>
      <h3> Difference between functions and components</h3>
      <p>Normal Function Result: {add(10, 20)}</p>

      <h3>Interview Question</h3>
      <p>Q: What is a React Component?</p>
      <p>A: A reusable UI block written as a function or class</p>
</div>
  );
}
export default App;

