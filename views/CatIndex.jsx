import React from 'react'

function CatIndex(props) {
  return (
    <div>
      <h1>Browse the list of cats</h1>
      {
        props.cats.map((cat)=>{
            return <div>
                <h1>{cat.name}</h1>
                <h2>{cat.age}</h2>
                {
                    cat.hadFirstCheckup ? 
                    <h3>Had a checkup</h3> : 
                    <h3>Needs a checkup</h3>
                }
                <h3>{cat.description}</h3>
                <form action={`/cats/${cat._id}?_method=DELETE`} 
                    method="POST">
                        <input type="submit" value="DELETE"/>
                </form>
            </div>
        })
      }
    </div>
  )
}

export default CatIndex
