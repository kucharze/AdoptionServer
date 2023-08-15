import React from 'react'

function CatIndex(props) {
  return (
    <div>
      <h1>Browse the list of cats</h1>
      {
        props.cats.map((cat)=>{
            <h1>{cat.name}</h1>
        })
      }
    </div>
  )
}

export default CatIndex
