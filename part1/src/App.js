import React from "react";

const Header = (props) => {
  console.log("Header", props);
  return <h1> {props.course}</h1>;
};

const Part = (props) => {
  console.log("Part", props);
  return (
    <div>
      <p>{props.parts}</p>
    </div>
  );
};

const Content = (props) => {
  console.log("Content", props);
  return <Part parts={props.parts} />;
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercices: 10,
      },
      {
        name: "Using props to pass data",
        exercices: 7,
      },
      {
        name: "State of a component",
        exercices: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name} />
      <Content course={course.parts} />
      {/* <Total partscourse={parts} /> */}
    </div>
  );
};

export default App;
