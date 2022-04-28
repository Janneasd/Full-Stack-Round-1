import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const MostVotes = (props) => {
  var largest = Math.max(...props.array)
  var index = props.array.indexOf(largest)
 return (
   <div>
     {props.vittu[index]}
   </div>
 )
}




const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  var [selected, setSelected] = useState(0)
  var array = new Uint8Array(7); 
  var [array, setPoint] = useState(array)
  
  const line = () => {
    var lines = anecdotes.slice("\n")
    selected = Math.floor(Math.random() * lines.length)
    setSelected(selected)
    
  }

  const votes = () => {
    const copy = [...array]
    copy[selected] += 1
    setPoint(copy)
  }



  return (
    <div>
      Anecdote of the day
      <Button
      handleClick = {line}
      text="next anecdote"
      />
      {anecdotes[selected]}
      <div>
        <Button
        handleClick = {votes}
        text="vote"
        />
        has {array[selected]} votes
      </div>
        Anecdote with most votes
         <MostVotes array={array} vittu={anecdotes}/>
    </div>
  )
}

export default App