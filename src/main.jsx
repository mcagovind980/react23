import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/css/Practice.css'
// import List from '../src/Pages/List.jsx'
// import Form from '../src/Pages/Form.jsx'
import MyForm from '../src/Pages/MyForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Form /> */}
    <MyForm/>
  </StrictMode> 
)
