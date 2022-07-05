import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { Dataset } from "./data/dataset"
import "./App.css"
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import Chip from "./components/Chip/Chip"
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"
import CategoriesColumn  from "./components/CategoriesColumn/CategoriesColumn"
import { useState } from "react"
import RestaurantsRow from "./components/RestaurantsRows/RestaurantsRows"
import MenuDisplay from "./components/MenuDisplay/MenuDisplay"
import DataSource from "./components/DataSource/DataSource"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!

export function App() {  
  const { data, categories, restaurants } = Dataset.createDataSet()
  const [category, setCategory] = useState(null)
  const [restaurant, setRestaurant] = useState(null)
  const [menuItem, setMenuItem] = useState(null)
  let currentMenuItems = data.filter(item => (item.food_category === category && item.restaurant === restaurant)) 
  let instructionKey
  if (category && restaurant) {
    if (menuItem) {
      instructionKey = "allSelected"
    } else {
      instructionKey = "noSelectedItem"
    }    
  } else if (category) {
    instructionKey = "onlyCategory"
  } else if (restaurant) {
    instructionKey = "onlyRestaurant"
  } else {
    instructionKey = "start"
  }  
  const handleClickCategory = (label) => {
    setCategory(label)
    
  }
  const handleClickRestaurant = (restaurant) => {
    setRestaurant(restaurant)
    
  }
  const handleClickMenuItem = (menuItem) => {
    setMenuItem(menuItem)
  }
  const handleDeselectMenuItem = (event) => {    
    setMenuItem(null)
    event.stopPropagation();    
  }
  const handleDeselectCategory = (event) => {    
    setCategory(null)
    event.stopPropagation();  
  }
  const handleDeselectRestaurant = (event) => {
    setRestaurant(null)
    event.stopPropagation();
  }
  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <CategoriesColumn categories={categories} category={category} onClick={handleClickCategory} deselectItem={handleDeselectCategory}/>
      
      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description}/>

        {/* RESTAURANTS ROW */}
        <RestaurantsRow restaurants={restaurants} restaurant={restaurant} onClick={handleClickRestaurant} deselectItem={handleDeselectRestaurant}/>       

        {/* INSTRUCTIONS GO HERE */}
        <Instructions instructions={appInfo.instructions[instructionKey]}/>

        {/* MENU DISPLAY */}
        <MenuDisplay currentMenuItems={currentMenuItems} menuItem={menuItem} onClick={handleClickMenuItem} deselectItem={handleDeselectMenuItem}/>         

        {/* DATA SOURCES */}
        <DataSource dataSource={appInfo.dataSource}/>
      </div>
    </main>
  )
}

export default App
