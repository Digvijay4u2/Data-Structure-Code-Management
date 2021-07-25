import { createStore,applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import {reducer} from './reducer'

export const store = createStore(reducer, applyMiddleware(Thunk)) 