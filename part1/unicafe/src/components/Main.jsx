import { useState } from "react";
import { ButtonSection } from "./ButtonSection";
import { StatisticSection } from "./StatisticSection";



export const Main = ()=>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = ()=>{
    setGood(good + 1)
    setTotal(total + 1)
  }
  const handleNeutral = ()=>{
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }
  const handleBad = ()=>{
    setBad(bad + 1)
    setTotal(total + 1)
  }
    return(
      <main>
        <ButtonSection handleGoodClick={handleGood} handleNeutralClick={handleNeutral} handleBadClick={handleBad}/>
        <StatisticSection good={good} neutral={neutral} bad={bad} all={total} average={(good - bad)/total} positive={good/total}/>
      </main>
    )
}