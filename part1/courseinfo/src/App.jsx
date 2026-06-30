const Header = (course) => {
  return (
    <>
      <h1>{course.course.name}</h1>
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
      <Part part={parts.course.parts[0].name} exercise={parts.course.parts[0].exercises}/>
      <Part part={parts.course.parts[1].name} exercise={parts.course.parts[1].exercises}/>
      <Part part={parts.course.parts[2].name} exercise={parts.course.parts[2].exercises}/>
    </>
  )
}

const Total = (total) => {
  return (
    <>
      <p>Number of exercises {total.course.parts[0].exercises + total.course.parts[1].exercises + total.course.parts[2].exercises}</p>
    </>
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
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App