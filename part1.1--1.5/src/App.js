const Header = (props) => {
    return (
        <div>
            
            <h1>{props.course}</h1>
            
        </div>
    )
   }

   const Part = props => {
       return (
           <div>
               <p>
                   {props.part1} {props.exercises1} {props.part2} {props.exercises2} {props.part3} {props.exercises3}
               </p>
           </div>
       )
   }
 
   const Content = (props) => {
       return (
           <div>
               <Part part1={props.course[0].name} exercises1={props.course[0].exercises} />
               <Part part2={props.course[1].name} exercises2={props.course[1].exercises} />
               <Part part3={props.course[2].name} exercises3={props.course[2].exercises} />
           </div>
       )
   }
 
   const Total = (props) => {
       return (
           <div>
               <p>
                   Number of exercises {props.course[0].exercises + props.course[1].exercises + props.course[2].exercises}
               </p>
           </div>
       )
   }
const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }
    return (
      <div>
          <Header course={course.name} />
          <Content course={course.parts} />
          <Total course={course.parts}/>
      </div>
    )
  }

 
  
  export default App