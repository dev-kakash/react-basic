import React from 'react'

const Person = ({person},{key}) => {
    return (
        <div>
            <p>My id is {person.id} and i am {person.name}</p>
        </div>
    )
}

export default Person
