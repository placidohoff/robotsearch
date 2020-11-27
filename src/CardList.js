import React from 'react'
import Card from './Card.js';
//import {robots} from './robots.js'
import "tachyons";

//const bots = robots;

// const cardList = ({robots}) => {
//     const cardComponent =
// }

const CardList = (props) => {
    return(

    <div 
        
   style={{display:'flex', flexWrap:'wrap'}}>
      
      {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} /> */}
      
      {props.robots.map(robot => {
          return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
      })}
      {props.robots.map(robot => {
          return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
      })}

      
    </div>
    )
}

export default CardList;