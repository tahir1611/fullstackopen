const Header = (course) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  )
}

const Part = (parts) => {
  return (
    <>
      <p>
        {parts.part} {parts.exercise}
      </p>
    </>
  )
}

const Content = (parts) => {
  return (
    <>
      <Part part={parts.part1} exercise={parts.exercises1}/>
      <Part part={parts.part2} exercise={parts.exercises2}/>
      <Part part={parts.part3} exercise={parts.exercises3}/>
    </>
  )
}

const Total = (total) => {
  return (
    <>
      <p>Number of exercises {total.number}</p>
    </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total number={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App