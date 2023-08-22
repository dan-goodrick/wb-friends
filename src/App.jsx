import { useState, useEffect } from "react";
import axios from 'axios'

export default function App() {
  const [friends, setFriend] = useState([]);
  let [picture, setPicture] = useState("");
  let [name, setName] = useState("");
  

  const addFriend = () => {
    setFriend([...friends, { picture: picture, name: name }])
    picture = ''
    name = ''
    console.log("friends", friends);
  }
  
  const friendInfo = friends.map((friend)=> {
      return <div key={friend.name}>
        <img src = {friend.picture} width="100px" alt={friend.name}></img>
        <span>{friend.name}</span>
      </div>
    })

  console.log("friendInfo", friendInfo)
  return (
    <div>
      <label htmlFor="picture">Picture:</label>
      <input
        id="picture"
        value={picture}
        onChange={(e) => {
          setPicture(e.target.value);
          console.log(e.target.value);
        }}
      />

      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          console.log(e.target.value);
        }}
      />
      <button type="button" onClick={addFriend}>Add Friend</button>
      {friendInfo}
    </div>
  );
}
