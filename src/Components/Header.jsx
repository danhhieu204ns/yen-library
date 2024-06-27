import React, { useEffect, useState } from "react"
import "./Header.css"
import {CONTENT, descriptions} from "./data.js"

function CoreConcept({label, onClick}) {
    return (
        <button onClick={onClick}>{label}</button>
    )
  }

const Header = () => {
    const [selectedContent, setContent] = useState('')
    const [data, setData] = useState([])
    const handleSelect = (selectedBtn) => {
        setContent(selectedBtn)
    }
    useEffect(() => {
        const callApi = async (url) => {
            const response = await fetch(url)
            const calledData = await response.json()
            setData([...data, calledData])
        }
        callApi("https://jsonplaceholder.typicode.com/posts")
        // callApi("https://jsonplaceholder.typicode.com/albums")
        // callApi("https://jsonplaceholder.typicode.com/todos")
        // callApi("https://jsonplaceholder.typicode.com/users")
    })

    let tabContent = <p>Please select a topic!</p>
    if (selectedContent){
        tabContent = <div className="tab-content">
            <h1>{CONTENT[selectedContent].title}</h1>
            <p>{CONTENT[selectedContent].description}</p>
            {data.map((item) => {
                return <p key={item.id}> 
                    {item.id}
                    ok
                </p>
            })}
        </div> 
    }
    
    return (
        <>
            <div className = 'header'>
                <menu className = "menu-bar">
                    {descriptions.map((description) => {
                        return <CoreConcept key = {description} onClick = {() => handleSelect(description)} label={description}></CoreConcept>
                    })}
                    
                </menu>
                <div className = "login-box">
                    <CoreConcept label={'Sign In'} className ="sign-in"></CoreConcept>
                    <CoreConcept label={'Register'} className ="register"></CoreConcept>
                </div>
            </div>
            <section>
                {tabContent}
            </section>
        </>
    )
}

export default Header