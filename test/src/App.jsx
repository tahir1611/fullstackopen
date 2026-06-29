const Hello = (props) => {
  console.log("Hello from component")
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Greeting app created by <a href="https://github.com/tahir1611/fullstackopen">Tahir</a>
    </div>
  )
}

const App = () => {
  const name = "Tahir"
  return (
    <>
      <h1>Greetings</h1>
      <Hello name={name} />
      <Footer />
    </>
  )
}

export default App