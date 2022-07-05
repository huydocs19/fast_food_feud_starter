import * as React from "react"
import Chip from "../Chip/Chip"

export function RestaurantsRow(props) {
  return (
    <div className="RestaurantsRow">
        <h2 className="title">Restaurants</h2>
        <div className="restaurants options">{props.restaurants.map((item, idx) => (            
        <Chip label={item} isActive={item==props.restaurant} onClick={() => props.onClick(item)} deselectItem={props.deselectItem} key={idx}/>
        ))}</div>
    </div>
  )
}

export default RestaurantsRow