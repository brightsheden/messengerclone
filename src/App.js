import React,{useEffect, useState} from 'react';
import { Button ,Input,FormControl,InputLabel,IconButton} from '@material-ui/core';
import FlipMove from 'react-flip-move';
import {MdSend} from 'react-icons/md'
import './App.css';
import Messages from './Messages';
import db from './firebase'
import firebase from 'firebase'

function App() {
  const [input, setInput] = useState("")
  const [messages, setMesssages] = useState([])
  const [username, setUsername] = useState("")


  useEffect(()=>{
    //getting data from firebase database
    db.collection("messages")
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot =>{
      setMesssages(snapshot.docs.map(doc => ({id:doc.id, message:doc.data()})))
    })
  },[])

  useEffect(()=>{
    setUsername (prompt("eneter your name"))
  },[])
  const handleSubmit  = (e)=>{
    e.preventDefault()
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })
    //setMesssages([...messages,{username:username, message:input}])
    setInput("")
  }
  
  //console.log(messages)
  return (
    <div className="App">
      <img src="https://th.bing.com/th/id/R.aa8382125b3e2f5d536b4b52786aefe8?rik=FVu6bDKtdZEFww&pid=ImgRaw&r=0?w=100&h=100"/>
    <h1>Messenger</h1>
    <h2>welcome {username}</h2>
    <form className='app__form'>
      <FormControl className='app__formControl'>
       
        <Input value={input} onChange={event =>setInput(event.target.value)} className="app-input" placeholder='enter your message' />
        <IconButton className='app-iconButton' disabled={!input} variant="contained" color="primary" type='submit' onClick={handleSubmit} >
          <MdSend/>
        </IconButton>
      </FormControl> 
  
    
    </form>
   
   <FlipMove>
      {
        messages.map(({id,message}) =>(
          
          <Messages key={id} username={username} message={message}/>
        ))}
   </FlipMove>
   
    </div>
  );
}

export default App;
