
          import { useEffect, useState } from 'react';
          import './App.css';
          function App() {
            return (
              <div className="App">
                <LoadPost></LoadPost>
                <District name="Noakhali" speciality="Bivag"  ></District>
                <District name="Chittagong" speciality="SeaBeach"></District>
                <District name="Faridpur" speciality="Khejur Gur" ></District>
                <District name="Chandpur" speciality="Hilsha" ></District>
                
              </div>
            );
          }
          const districtStyle = {
            backgroundColor: 'lightblue',
            boxShadow: '3px 5px 6px',
            borderRadius: '20px',
            padding: '20px',
            margin: '20px'
          }
          const LoadPost = ()=>{
            const [posts, setPosts] = useState([]);
            useEffect(()=>{
              fetch('https://jsonplaceholder.typicode.com/posts')
              .then(response => response.json())
              .then(data=>setPosts(data))
            },[])
            return (
              <div>
                <h2> Posts :{posts.length} </h2>
                <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)'}} >
                {
                  posts.map( post =><Post 
                    title={post.title} 
                    body={post.body} 
                    ></Post>)
                }
                </div>
              </div>
            )
          }
          const Post = (props)=>{
            return(
              <div style={{backgroundColor:'whitesmoke', padding:'20px', margin:'20px', borderRadius:'8px'}} >
                <h3> Title: {props.title} </h3>
                <p> Body: {props.body} </p>
              </div>
            )
          }
          function District(props){
            const [power, setPower] = useState([1]);
            const boostPower = () =>{
              const newPower = power*2;
              setPower(newPower);
            }
            return (
                <div style={districtStyle} >
                  <h2> Name : {props.name} </h2>
                  <p> Speciality : {props.speciality} </p>
                  <p> Power : {power} </p>
                  <button onClick={boostPower} > Power</button>
               </div>
            )
          }
          export default App;
