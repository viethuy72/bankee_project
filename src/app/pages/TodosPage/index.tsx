import React, { useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { Button } from 'app/components/elements/Button'
import styled from 'styled-components/macro'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectTodos, addTodo } from './slice'

export function TodosPage() {
  const todos = useAppSelector(selectTodos)
  const dispatch = useAppDispatch()

  const handleAddTodo = useCallback(() => {
    dispatch(addTodo('Doing something'))
  }, [dispatch])

  return (
    <Wrapper>
      <Helmet>
        <title>Todo Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div>
        <div>
          <Button onClick={handleAddTodo}>Add todo</Button>
        </div>
        <ul>
          {todos.map(item => {
            return <li key={item.id}>{item.text}</li>
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`
