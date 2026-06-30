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
      <Part part={parts.parts[0].name} exercise={parts.parts[0].exercises}/>
      <Part part={parts.parts[1].name} exercise={parts.parts[1].exercises}/>
      <Part part={parts.parts[2].name} exercise={parts.parts[2].exercises}/>
    </>
  )
}

const Total = (total) => {
  return (
    <>
      
      <p>Number of exercises {total.parts[0].exercises + total.parts[1].exercises + total.parts[2].exercises}</p>
    </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
    const parts = [
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


  return (
    <div>
      <Header name={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App