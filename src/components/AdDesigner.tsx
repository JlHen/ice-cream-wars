import './AdDesigner.css'

function AdDesigner() {
    return (
        <div className="AdDesigner">
            <header><h2>Ad Designer</h2></header>
            <Ad/>
            <Support/>
            <ColorTheme/>
            <FontSize/>
        </div>
    )
}

function Ad() {
    return (
        <div className="Ad">
        Vote for ice cream
        </div>
    )
}

function Support() {
    return (
        <div className="SupportChoice">
            <header>What to support</header>
            <ChocolateButton/><VanillaButton/><StrawberryButton/>
        </div>
    )
}

function ChocolateButton() {
    return (
        <button className="ChocolateButton">Chocolate</button>
    )
}

function VanillaButton() {
    return (
        <button className="VanillaButton">Vanilla</button>
    )
}

function StrawberryButton() {
    return (
        <button className="StrawberryButton">Strawberry</button>
    )
}

function ColorTheme() {
    return (
        <div className="ColorTheme">
            <header>Color Theme</header>
            <LightThemeButton/><DarkThemeButton/>
        </div>
    )
}

function LightThemeButton() {
    return (
        <button>Light Theme</button>
    )
}

function DarkThemeButton() {
    return (
        <button>Dark Theme</button>
    )
}

function FontSize() {
    return (
        <div className="FontSize">
            <header>Font Size</header>
            <DecreaseFontSizeButton/>
            <IncreaseFontSizeButton/>
        </div>
    )
}

function IncreaseFontSizeButton() {
    return (
        <button>Up</button>
    )
}

function DecreaseFontSizeButton() {
    return (
        <button>Down</button>
    )
}

export default AdDesigner