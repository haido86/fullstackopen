import "./App.css";
import React, { useState } from "react";

const Button = (props) => {
  const { buttonName, handleOnClick } = props;

  return <button onClick={handleOnClick}>{buttonName}</button>;
};

const StatisticLine = (props) => {
  const { text, value, showPercent } = props;
  return (
    <p>
      {text} {value} {showPercent && "%"}
    </p>
  );
};
const Statistics = (props) => {
  const { good, neutral, bad } = props;

  const all = good + neutral + bad;
  let average;
  let positive;
  if (all !== 0) {
    average = (good * 1 + neutral * 0 + bad * -1) / all;
    positive = (good / all) * 100;
  }

  return (
    <>
      <h1>Statistics</h1>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <table>
            <tbody>
              <tr>
                <td>
                  <StatisticLine text="good" />
                </td>
                <td>
                  <StatisticLine value={good} />
                </td>
              </tr>
              <tr>
                <td>
                  <StatisticLine text="neutral" />
                </td>
                <td>
                  <StatisticLine value={neutral} />
                </td>
              </tr>
              <tr>
                <td>
                  <StatisticLine text="bad" />
                </td>
                <td>
                  <StatisticLine value={bad} />
                </td>
              </tr>
              <tr>
                <td>
                  <StatisticLine text="all" />
                </td>
                <td>
                  <StatisticLine value={all} />
                </td>
              </tr>
              <tr>
                <td>
                  <StatisticLine text="average" />
                </td>
                <td>
                  <StatisticLine value={average} />
                </td>
              </tr>
              <tr>
                <td>
                  <StatisticLine text="positive" />
                </td>
                <td>
                  <StatisticLine value={positive} showPercent={true} />
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback </h1>
      <div>
        <Button buttonName="good" handleOnClick={() => setGood(good + 1)} />
        <Button
          buttonName="neutral"
          handleOnClick={() => setNeutral(neutral + 1)}
        />
        <Button buttonName="bad" handleOnClick={() => setBad(bad + 1)} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
