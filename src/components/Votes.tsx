import './Votes.css'
import {useState} from "react";

function Votes() {
    const [chocolateVotes, setChocolateVotes] = useState(0)
    const [vanillaVotes, setVanillaVotes] = useState(0)
    const [strawberryVotes, setStrawberryVotes] = useState(0)
    function voteChocolate() {
        setChocolateVotes(previousCount => previousCount + 1)
    }
    function voteVanilla() {
        setVanillaVotes(previousCount => previousCount + 1)
    }
    function voteStrawberry() {
        setStrawberryVotes(previousCount => previousCount + 1)
    }
    return (
        <div className="Votes">
            <header><h2>Vote Here</h2></header>
            <button className="VoteChocolateButton" onClick={voteChocolate}>Chocolate</button>
            <button className="VoteVanillaButton" onClick={voteVanilla}>Vanilla</button>
            <button className="VoteStrawberryButton" onClick={voteStrawberry}>Strawberry</button>
            {TallyDisplay(chocolateVotes, vanillaVotes, strawberryVotes)}
        </div>
    )
}

function TallyDisplay(chocolateVotes:number, vanillaVotes:number, strawberryVotes:number) {
    if (chocolateVotes === 0 && vanillaVotes === 0 && strawberryVotes === 0) {
        return (
            <div>No votes yet!</div>
        )
    }
    const totalVotes = chocolateVotes + vanillaVotes + strawberryVotes
    return (
        <div>
            {FlavorTally("Chocolate", "#4f2c2c", chocolateVotes, ((chocolateVotes/totalVotes)*100).toFixed(1))}
            {FlavorTally("Vanilla", "#cbc0ac", vanillaVotes, ((vanillaVotes/totalVotes)*100).toFixed(1))}
            {FlavorTally("Strawberry", "#de8c91", strawberryVotes, ((strawberryVotes/totalVotes)*100).toFixed(1))}
        </div>
    )
}

function FlavorTally(flavor:string, color:string, voteCount:number, votePercentage:string) {
    if (voteCount === 0) {
        return
    }
    const barStyle = {
        backgroundColor: color,
        width: votePercentage+'%',
        height: 25,
        borderRadius: 5,
    }
    return (
        <div>
            <header>{flavor}: {voteCount} ({votePercentage}%)</header>
            <div style={barStyle}></div>
        </div>
    )
}

export default Votes
