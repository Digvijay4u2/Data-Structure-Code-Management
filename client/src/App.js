import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Dash from './Components/Dashboard/UserDash'
import { useSelector, useDispatch } from 'react-redux'
import { getQuestions } from './Action'
import { useEffect } from 'react'
import About from './Components/About/About'
import Logout from './Components/Logout/Logout'
import Home from './Pages/HomePage/Home'
import GlobalStyle from './globalStyles'
import ScrollToTop from './Components/ScrollToTop'
import NewRegistration from './Components/User/NewRegistration/NewRegistration'
import NewLogin from './Components/User/NewLogin/NewLogin'
import Topic from './Components/Topic/Topic'
import Question from './Components/Question/Question'
import Table from './Components/Table/Table'


function App() {
  
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.data
  })
  // useEffect(() => {
  //   dispatch(getQuestions())
  // },[])
  return (
    <>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <switch>
            <Route exact path="/">
              <Redirect to="/home"></Redirect>
            </Route>
            
            <Route path="/showquestion/:topic" component={Table} />
            <Route path="/addquestion" component={Question} />
            <Route path="/home" component={Home} />
            <Route path="/topic" component={Topic} />
            <Route path="/dash" component={Dash} />
            <Route path="/logout" component={Logout} />
            <Route path="/about" component={About} />
            <Route path="/login" component={NewLogin} />
            <Route path="/register" component={NewRegistration} />
        </switch>

      </Router>
    </>
  );
}

export default App;
