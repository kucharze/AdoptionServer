import React from 'react'

function CatEdit(props) {
  return (
    <div>
      <h1>Make cat edits</h1>
      <form action={`/cats/${props.cat._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={props.cat.name}/>
          <br/>
          Age: <input type="number" name="age"  defaultValue={props.cat.age}
          />
          <br/>
          Description: <input type="text" name="color"  defaultValue={props.cat.description}
          />
          <br/>
          Needs a checkeup:
          { props.cat.hadFirstCheckup? <input type="checkbox" name="hadFirstCheckup" defaultChecked />: 
          <input type="checkbox" name="hadFirstCheckupt"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
    </div>
  )
}

export default CatEdit
