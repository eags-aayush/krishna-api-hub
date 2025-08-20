import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Advantage from './components/Advantage'
import Student from './components/Student'
import Testimonials from './components/Testimonials'
import Form from './components/Form'
import Product from './components/Product'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Advantage />
      <Student />
      {/* <Testimonials /> */}
      <Form />
      <Product />
      <Footer />
    </>
  )
}

export default App
