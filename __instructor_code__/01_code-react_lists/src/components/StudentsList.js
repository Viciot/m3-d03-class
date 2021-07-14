import React from 'react'

const studentsList = ['Morgane', 'Miki', 'Sebas', 'Raul','Lau', 'Victor', 'Danny']
const JSXstudentsList = [<li>Morgane</li>, <li>Miki</li>, <li>Sebas</li>, <li>Raul</li>, <li>Lau</li>, <li>Victor</li>, <li>Danny</li>]

export default function StudentsList(){
return(
<div className= 'list'>
    <h2>List of PizzaBytes students</h2>
    <ul>
        {studentsList.map((student) => {
            return <li>{student}</li>
        })}
    </ul>
    <ul>
        {JSXstudentsList}
    </ul>
</div>
)
}
