import React from 'react'
import classes from './Item.module.css'


const Item = (props) => {
  const source = 'url(' + props.Source + ')'
  return (
    < div className={classes.Card} >
      <div style={{ content: source }} className={classes.Image}></div>
      <li className={classes.Name}>{props.Name}</li>
      <div className={classes.Overlay}>
        <ul className={classes.Content}>
          <li className={classes.Name}>{props.Name}</li>
          <li className={classes.Price}>${props.Price}</li>
          <li className={classes.Description}>{props.Description}</li>
        </ul>
        <button className={classes.Button}>Learn More</button>
      </div>

    </ div >
  )
}

export default Item