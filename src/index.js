import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import { HookApp } from './HookApp';
//import { CounterApp } from './components/01-useState/CounterApp'
//import { CounterCustomHooks } from './components/01-useState/CounterCustomHooks'
//import { SimpleForm } from "./components/02-useEffect/SimpleForm";
//import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook"
//import { MultipleCustomHooks } from "./components/examples/MultipleCustomHooks"
//import { FocusScreen } from './components/useRef/FocusScreen'
//import { RealRef } from './components/useRef/RealRef'
//import { Memorize } from './components/memo/Memorize'
//import { MemoHook } from './components/memo/MemoHook'
//import { CallbackHook } from './components/memo/CallbackHook'
//import { TodoApp } from './components/useReducer/TodoApp'
import { MainApp } from './components/useContext/MainApp.jsx'
ReactDOM.render(

  <MainApp />,

  document.getElementById('root')
);

