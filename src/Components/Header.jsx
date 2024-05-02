import { useState } from "react"
import "./Header.css"
import { CONTENT } from "./data.js"

const descriptions = ['bookSearch', 'volunteer', 'schedule', 'event']

function CoreConcept({label, onClick}) {
  return (
    <li>
        <button onClick={onClick}>{label}</button>
    </li>
  )
}

const Header = () => {
    const [selectedContent, setContent] = useState('')
    const handleSelect = (selectedBtn) => {
        setContent(selectedBtn)
    }

    let tabContent = <p>Please select a topic!</p>;

    if (selectedContent){
        tabContent = <div className="tab-content">
            <h1>{CONTENT[selectedContent].title}</h1>
            <p>{CONTENT[selectedContent].description}</p>
        </div> 
    }
    
    return (
        <>
            <div className = 'header'>
                <menu className = "menu-bar">
                    <CoreConcept onClick = {() => handleSelect(descriptions[0])} label={descriptions[0]}></CoreConcept>
                    <CoreConcept onClick = {() => handleSelect(descriptions[1])} label={descriptions[1]}></CoreConcept>
                    <CoreConcept onClick = {() => handleSelect(descriptions[2])} label={descriptions[2]}></CoreConcept>
                    <CoreConcept onClick = {() => handleSelect(descriptions[3])} label={descriptions[3]}></CoreConcept>
                </menu>
                <div className = "login-box">
                    <CoreConcept label={''} className ="sign-in"></CoreConcept>
                    <CoreConcept label={''} className ="register"></CoreConcept>
                </div>
            </div>
            <section>
                {tabContent}
            </section>
        </>
    )
}

export default Header