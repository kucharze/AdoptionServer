import React from 'react'

function Dogedit(props) {
  return (
    <div>
        <form action={`/dogs/${props.dog._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={props.dog.name}/>
          <br/>
          Age: <input type="number" name="age"  defaultValue={props.dog.age}
          />
          <br/>
          Description: <input type="text" name="color"  defaultValue={props.dog.description}
          />
          <br/>
          Breed: <input type="text" name="breed"  defaultValue={props.dog.breed}
          />
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
    </div>
  )
}

export default Dogedit
