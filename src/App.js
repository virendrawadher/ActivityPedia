import React, { useState } from "react";
import "./styles.css";

var activityDictionary = {
  "⚽": "Soccer Ball",
  "⚾": "Baseball",
  "🥎": "Softball",
  "🏀": "Basketball",
  "🏐": "Volleyball",
  "🏈": "American Football",
  "🏉": "Rugby Football",
  "🎾": "Tennis",
  "🥏": "Flying Disc",
  "🎳": "Bowling",
  "🏏": "Cricket Game",
  "🏑": "Field Hockey",
  "🏒": "Ice Hockey",
  "🥍": "Lacrosse",
  "🏓": "Ping Pong",
  "🏸": "Badminton",
  "🥊": "Boxing Glove",
  "🥋": "Martial Arts Uniform",
  "🥅": "Goal Net",
  "⛳": "Flag in Hole",
  "⛸️": "Ice Skate",
  "🎣": "Fishing Pole",
  "🎽": "Running Shirt",
  "🎿": "Skis",
  "🛷": "Sled",
  "🥌": "Curling Stone",
  "🎯": "Direct Hit",
  "🎱": "Pool 8 Ball"
};

var activityList = Object.keys(activityDictionary);

export default function App() {
  const [activityEmoji, setActivityEmoji] = useState("");
  function activityHanlder(event) {
    var userInput = event.target.value;
    if (userInput in activityDictionary) {
      setActivityEmoji(activityDictionary[userInput]);
    } else {
      setActivityEmoji("Sorry we don't have this activity in our database");
    }
  }

  function activityClickHanlder(activity) {
    setActivityEmoji(activityDictionary[activity]);
  }

  return (
    <div className="App">
      <h1>
        Welcome to <span className="acti-ami">Activity</span>Pedia
      </h1>
      <input onChange={activityHanlder}></input>
      <h2>It is {activityEmoji}</h2>

      <h3>Activity we have</h3>
      <div className="onclick-view">
        {activityList.map(function (activity) {
          return (
            <span
              className="onclick-event"
              onClick={() => activityClickHanlder(activity)}
              key={activity}
            >
              {activity}
            </span>
          );
        })}
      </div>
    </div>
  );
}
