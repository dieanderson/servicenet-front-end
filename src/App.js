import {
  BrowserRouter,
  Routes, 
  Route,
} from 'react-router-dom'

import TemplateDefault from './templates/Default'

import Home from './pages/Home'
import UsersList from './pages/users/List'
import UsersRegister from './pages/users/Register'

const App = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route 
                    exact path="/" 
                    element={
                        <TemplateDefault>
                            <Home />
                        </TemplateDefault>
                    } 
                />  
                <Route exact path="/users" 
                    element={
                        <TemplateDefault>
                            <UsersList />
                        </TemplateDefault>
                    } 
                /> 
                <Route exact path="/users/add" 
                    element={
                        <TemplateDefault>
                            <UsersRegister />
                        </TemplateDefault>
                    } 
                />                  
            </Routes>
        </BrowserRouter>

    )
}

export default App
