import React from 'react'

function DogIndex(props) {
  return (
    <div>
      <h1>Browse the list of dogs</h1>
      {
        props.dogs.map((dog)=>{
            <h1>{dog.name}</h1>
        })
      }
    </div>
  )
}

export default DogIndex
