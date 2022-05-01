import logo from "./logo.svg"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import NotFoundPage from "./pages/NotFoundPage"
import Layout from "./components/layout/Layout"

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
