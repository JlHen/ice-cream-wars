import './AdDesigner.css'
import {useState} from "react";

function AdDesigner() {
    const [currentFlavor, setCurrentFlavor] = useState("Pick a flavor!")
    const [fontSize, setFontSize] = useState(16)
    const [colorTheme, setColorTheme] = useState("Dark")
    let flavorFontStyle = {
        fontSize: fontSize,
        color: "#fff",
    }
    let adHeaderFontStyle = {
        color: "#fff",
    }
    let backgroundStyle = {
        backgroundColor: "#222",
    }
    if (colorTheme === "Light") {
        flavorFontStyle.color = "#222"
        adHeaderFontStyle.color = "#222"
        backgroundStyle.backgroundColor = "#fff"
    }
    return (
        <div className="AdDesigner">
            <header><h2>Ad Designer</h2></header>
            <div>
                <div style={backgroundStyle} className="Ad">
                    <header style={adHeaderFontStyle}>Vote for</header> <p style={flavorFontStyle}>{currentFlavor}</p>
                </div>
                <header>What to Support</header>
                <button onClick={()=>setCurrentFlavor("Chocolate")} className="ChocolateButton" disabled={currentFlavor === "Chocolate"}>Chocolate</button>
                <button onClick={()=>setCurrentFlavor("Vanilla")} className="VanillaButton" disabled={currentFlavor === "Vanilla"}>Vanilla</button>
                <button onClick={()=>setCurrentFlavor("Strawberry")} className="StrawberryButton" disabled={currentFlavor === "Strawberry"}>Strawberry</button>
            </div>
            <div>
                <header>Color Theme</header>
                <button onClick={()=>setColorTheme("Light")} className="LightThemeButton" disabled={colorTheme === "Light"}>Light</button>
                <button onClick={()=>setColorTheme("Dark")} className="DarkThemeButton" disabled={colorTheme === "Dark"}>Dark</button>
            </div>
            <div className="FontSize">
                <header>Font Size</header>
                <button onClick={() => setFontSize( prev => {if (prev === 0) {return 0 } return prev - 1})} className="FontDown">Down</button>
                {fontSize}
                <button onClick={() => setFontSize(prev => prev + 1)} className="FontUp">Up</button>
            </div>
        </div>
    )
}

export default AdDesigner
