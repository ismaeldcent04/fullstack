

export const StatisticSection = ({good, neutral, bad, all, average, positive})=>{
    return(
        <section>
        <h2>Statistics</h2>
        {all > 0?<aside>
          <p>Good {good}</p>
          <p>Neutral {neutral}</p>
          <p>Bad {bad}</p>
          <p>All {all}</p>
          <p>Average {average}</p>
          <p>Positive {positive}%</p>
        </aside>: <h3>No feedback given</h3>}
      </section>
    )
}