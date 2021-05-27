import React from 'react'
import Person from './Person';

const NameList = () => {
    const names = ['akash','batash','sagar'];
    const persons = [
        {   
            id:1,
            name:'akash'
        },
        {
            id:2,
            name:'sagar',
        },
    ];
    const personList =  persons.map(person => <Person key={person.id} person={person}/>)
    return (
        <div>
            {
             personList  
            }
        </div>
    )
}

export default NameList
