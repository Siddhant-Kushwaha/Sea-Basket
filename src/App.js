import "./App.css"
import HaveRead from "./Components/HaveRead/HaveRead"
import Collapse from "./Components/Collapse/Collapse"
import Home from "./Components/Home/Home"
import ReadMore from "./Components/ReadMore/ReadMore"
import Category from "./Components/Category/Category"
import Footer from "./Components/Footer/Footer"
import FAQ from "./Components/FAQ/FAQ"
import Read from "./Components/Read/Read"
import Topics from "./Components/Topics/Topics"
import Video from "./Components/Video/Video"
import pattern from "./Images/pattern2.png"

function App() {
    return (
        <div className="App">
            <div className="body-bg"></div>
            <Home />
            <Category />
            <Video />
            <FAQ />
            <Read />
            <Topics />
            <Footer />
        </div>
    )
}

export default App
