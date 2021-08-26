import React from "react";

const Header = (props) => {
  return (
    <div>
      <p> {props.course}</p>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part}
        {props.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercices1} />
      <Part part={props.part2} exercises={props.exercices2} />
      <Part part={props.part3} exercises={props.exercices3} />
    </div>
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
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercices1 = 10;
  const part2 = "Using props to pass data";
  const exercices2 = 7;
  const part3 = "State of a component";
  const exercices3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercices1={exercices1} />
      <Content part2={part2} exercices2={exercices2} />
      <Content part3={part3} exercices3={exercices3} />
      <Total total={exercices1 + exercices2 + exercices3} />
    </div>
  );
};

export default App;
