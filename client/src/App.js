import logo from "./logo.svg"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import NotFoundPage from "./pages/NotFoundPage"
import Layout from "./components/layout/Layout"
import NewContact from "./components/contacts/NewContact"
import ViewContact from "./components/contacts/ViewContact"
import EditContact from "./components/contacts/EditContact"

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/contacts/new" element={<NewContact />} />
          <Route path="/contacts/edit/:id" element={<EditContact />} />
          <Route path="/contacts/:id" element={<ViewContact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
