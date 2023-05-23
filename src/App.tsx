import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home/Home'


import "./assets/css/bootstrap.css"
// import "./assets/vendors/linericon/style.css"
// import "./assets/css/font-awesome.min.css"
import "./assets/vendors/owl-carousel/owl.carousel.min.css"
import "./assets/vendors/nice-select/css/nice-select.css"
import "./assets/vendors/animate-css/animate.css"
import "./assets/vendors/jquery-ui/jquery-ui.css"
import "./assets/css/style.css"
import "./assets/css/responsive.css"


import AppLayout from './components/AppLayout/AppLayout'
import About from './screens/About/About'


function App() {

  return (
    <Routes>
      <Route path="" element={<AppLayout />} >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>

    </Routes>
  )
}

export default App
