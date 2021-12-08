const Header = ({ text }) => {
  return <h1> {text}</h1>;
};

const Part = ({ part }) => {
  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const Total = ({ course }) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Total of {total} exercises</p>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total course={course} />
    </>
  );
};
export default Course;
