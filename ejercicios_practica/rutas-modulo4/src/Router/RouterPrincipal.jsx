import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { Contact } from "../views/Contact"

function RouterPrincipal() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPrincipal