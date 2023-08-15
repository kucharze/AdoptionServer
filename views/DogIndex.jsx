import React from 'react'

function DogIndex(props) {
  return (
    <div>
      <h1>Browse the list of dogs</h1>
      {
        props.dogs.map((dog)=>{
            return (<div>
                <h1>{dog.name}</h1>
                <h2>{dog.breed}</h2>
                <form action={`/dogs/${dog._id}?_method=DELETE`} 
                    method="POST">
                        <input type="submit" value="DELETE"/>
                </form>
            </div>
           
            )
        })
      }
    </div>
  )
}

export default DogIndex
