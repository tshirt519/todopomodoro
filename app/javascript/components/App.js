import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import TodoList from './TodoList'
import EditTodo from './EditTodo'
import Pomodoro from './Pomodoro'
import './App.css'

const Nabvar = styled.nav`
  background: #aaaaaa;
  min-height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

const Logo = styled.div`
  font-weight: bold;
  font-size: 18px;
`

const NavItems = styled.ul`
  display: flex;
  max-width: 25%;
  justify-content: space-around;
  list-style: none;
  padding: 0 20px;
`

const NavItem = styled.li`
  font-size: 18px;
  font-weight: bold;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  width: 800px;
  max-width: 85%;
  margin: 20px auto;
`

function App() {
  return (
    <>
      <Nabvar>
        <Logo>
          <Link to="/todos">
            Todo
          </Link>
        </Logo>
        <NavItems>
          <NavItem>
            <Link to="/todos/pomodoro">
              Pomodoro
            </Link>
          </NavItem>
        </NavItems>
      </Nabvar>
      <Wrapper>
        <Switch>
          <Route exact path="/todos" component={TodoList} />
          <Route path="/todos/:id/edit" component={EditTodo} />
          <Route path="/todos/pomodoro" component={Pomodoro} />
        </Switch>
      </Wrapper>
    </>
  )
}

export default App