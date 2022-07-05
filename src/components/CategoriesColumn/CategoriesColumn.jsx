import * as React from "react"
import Chip from "../Chip/Chip"

export function CategoriesColumn(props) {
  return (
    <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>          
          {props.categories.map((item, idx) => (                    
            <Chip label={item} isActive={item==props.category} onClick={() => props.onClick(item)} deselectItem={props.deselectItem} key={idx}/>
          ))}          
        </div>
    </div>
  )
}

export default CategoriesColumn