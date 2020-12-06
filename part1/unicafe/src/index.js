import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Feedback = ({ good, neutral, bad, setGood, setNeutral, setBad }) => {
  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);
  return (
    <div>
      <h1>give feedback</h1>
      <Button text={'good'} handleClick={handleGood} />
      <Button text={'neutral'} handleClick={handleNeutral} />
      <Button text={'bad'} handleClick={handleBad} />
    </div>
  );
};

const Stat = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  const total = good + bad + neutral;

  const avg = (good - bad) / total;
  if (total > 0) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Stat text={'good'} value={good} />
            <Stat text={'neutral'} value={neutral} />
            <Stat text={'bad'} value={bad} />
            <Stat text={'all'} value={total} />
            <Stat text={'average'} value={avg} />
            <Stat text={'positive'} value={(good / total) * 100} />
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback has been given</p>
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Feedback good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
