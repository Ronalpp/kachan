import "./App.css"
import logo from "./assets/react.svg"
import Navbar from "./components/Navbar" 
import Footer from "./components/Footer"

export default function App() {
  return (
  <>
  <Navbar/> 
      <div className="div">
        <h1>Ronal Perez</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure qui a velit quam saepe, ducimus nobis illo maiores amet earum laboriosam, sapiente minus. Quisquam dolorum placeat, accusamus libero labore ipsa!</p>
         <div className="abilidades">
          <li>Web desing</li>
          <li className="li">Web develoment</li>
          <li className="li">ChatGPT</li>
          <li className="li">WordPrees</li>
         </div> 
         <img src={logo} />
      </div>
      <Footer/>
    </>
  )
}