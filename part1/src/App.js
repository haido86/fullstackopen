import React from "react";

const Header = (props) => {
  console.log("Header", props);
  return <h1> {props.course}</h1>;
};

const Part = (props) => {
  console.log("Part", props);
  return (
    <div>
      <p>{props.part.name}</p>
      <p>{props.part.parts}</p>
    </div>
  );
};

const Content = (props) => {
  console.log("Content", props);
  return (
    <>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </>
  );
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

  const total =
    course.parts[0].exercices +
    course.parts[1].exercices +
    course.parts[2].exercices;
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  );
};

export default App;
