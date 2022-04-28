import { useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistic = (props) => {
  if(props.all === 0) {
    return (
      <div>
       <h1>No feedback given</h1> 
      </div>
    )
  } 
  return (
  <div>
      <h1>
      statistic
    </h1>
     <StatisticLine text1 ="good" value1 ={props.good} />
    <StatisticLine text2="neutral" value2 ={props.neutral} />
    <StatisticLine text3="bad" value3={props.bad} />
    <StatisticLine text4="all" value4={props.all} />
     <StatisticLine text5="average" value5={(props.good - props.bad) / props.all} />
     <StatisticLine text6="positive" value6={(props.good / props.all) * 100} x="%"/>
  </div>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
    <table>
      <tbody>
        <tr>
         <td>{props.text1} {props.value1}</td> 
         </tr>
         <tr>
         <td>{props.text2} {props.value2}</td>
         </tr>
          <tr><td>{props.text3} {props.value3}</td></tr>
         <tr><td>{props.text4} {props.value4}</td></tr>
         <tr><td>{props.text5} {props.value5}</td> </tr>
         <tr>
         <td>{props.text6} {props.value6} {props.x}</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

 const handleGood = () => {
  setAll(all +1)
  setGood(good+1)
 } 
 const handleNeutral = () => {
  setAll(all +1)
  setNeutral(neutral+1)
 } 
 const handleBad = () => {
  setAll(all +1)
  setBad(bad +1)
 } 


  return (
    <div>
      <h1>give feedback</h1>
      <Button
      handleClick={handleGood}
      text='Good'
      />
      <Button
      handleClick={handleNeutral}
      text='Neutral'
      />
      <Button
      handleClick={handleBad}
      text='Bad'
      />
      <Statistic good={good} bad ={bad} neutral ={neutral} all={all}/>
    </div>
  )
}

export default App