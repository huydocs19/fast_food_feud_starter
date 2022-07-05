import * as React from "react"
import Chip from "../Chip/Chip"
import NutritionalLabel from "../NutritionalLabel/NutritionalLabel"

export function MenuDisplay(props) {
  return (
    <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {props.currentMenuItems.map((item, idx) => (            
            <Chip label={item.item_name} isActive={props.menuItem && item.item_name == props.menuItem.item_name} onClick={() => props.onClick(item)} deselectItem={props.deselectItem} key={idx}/>
          ))}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">{
            props.menuItem && <NutritionalLabel item={props.menuItem}/>
          }</div>
    </div>
  )
}

export default MenuDisplay