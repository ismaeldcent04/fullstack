

export const ButtonSection = ({handleGoodClick, handleNeutralClick, handleBadClick})=>{
    return(
        <section>
        <button onClick={handleGoodClick}>Good</button>
        <button onClick={handleNeutralClick}>Neutral</button>
        <button onClick={handleBadClick}>Bad</button>
      </section>
    )
}