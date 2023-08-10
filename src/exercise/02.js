// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  // 🐨 replace this with a call to React.Children.map and map each child in
  // props.children to a clone of that child with the props they need using
  // React.cloneElement.
  const children11 = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {})
  })
  // 💰 React.Children.map(props.children, child => {/* return child clone here */})
  // 📜 https://react.dev/reference/react/Children
  // 📜 https://react.dev/reference/react/cloneElement
  return <Switch on={on} onClick={toggle} />
}

// 🐨 Flesh out each of these components

// Accepts `on` and `children` props and returns `children` if `on` is true
const ToggleOn = ({on, children}) => {
  return on ? children : null
}

// Accepts `on` and `children` props and returns `children` if `on` is false
const ToggleOff = ({on, children}) => {
  return !on ? children : null
}

// Accepts `on` and `toggle` props and returns the <Switch /> with those props.
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

function App() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)
  return (
    <div>
      <Toggle>
        <ToggleOn on={on}>The button is on</ToggleOn>
        <ToggleOff on={on}>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton on={on} toggle={toggle} />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
