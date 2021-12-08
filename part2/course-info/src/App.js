import React from "react";

const Header = ({ course }) => {
  return <h1> {course}</h1>;
};

const Part = (course) => {
  return (
    <div>
      <p>
        {course.part.name}
        {course.part.exercises}
      </p>
    </div>
  );
};

const Content = (course) => {
  return (
    <>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
    </>
  );
};

const Total = (course) => {
  return (
    <div>
      <p>Number of exercises {course.total}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const total =
    course.parts[0].exercises +
    course.parts[1].exercises +
    course.parts[2].exercises;
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} exercises={course.parts.exercises} />
      <Total total={total} />
    </div>
  );
};

export default App;
