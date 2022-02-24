import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCard.css'
import db from './firebase';

function TinderCards() {

 const [People,SetPeople]=useState([]);

 useEffect(()=>{

   db.collection('people').onSnapshot(snapshot=>{
     SetPeople(snapshot.docs.map(doc=>doc.data()))
   })

 },[])



  return (
    <div>
    
        <div className="tinderCards__cardContainer">
        {
            People.map(person=>(
              <TinderCard
               className='swipe' key={person.name}
               preventSwipe={['up','down']}
              >
                  <div className="card"
                  style={{
                      backgroundImage:`url(${person.url})`,
                      width:"100px",
                      height:"30px"
                  }}
                  >
                      <h3>{person.name}</h3>
                  </div>
              </TinderCard> 
            ))
        }
        </div>

    </div>
  )
}

export default TinderCards