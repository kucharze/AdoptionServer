import React from 'react'

function NewCat() {
  return (
    <div>
        <form action="/cats" method="POST">
            Name: <input type="text" name="name" /><br/>
            Age: <input type="number" name="age" /><br/>
            Had first checkup: <input type="radio" name="hadFirstCheckup" /><br/>
            Description: <input type="text" name="description" /><br/>
            <input type="submit" name="" value="Create New Cat"/>
        </form>
    </div>
  )
}

export default NewCat
