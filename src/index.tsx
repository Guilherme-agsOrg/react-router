import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Inicio from './pages/shared/inicio';
import Sobre from './pages/shared/sobre';
import Contato from './pages/shared/contato';
import Layout from './components/template/Layout';

// const router = createBrowserRouter([
//   {path: "/", element: <Layout/>, children:[
//     {index: true, element: <Inicio/>}, //{path: "", element: <Inicio/>},
//     {path: "info", children:[
//       {path: "sobre", element: <Sobre/>},
//       {path: "contato", element: <Contato/>},
//     ]},
//   ]},
//   {path: "/inicio", element: <Inicio/>},
//   {path: "/info", element: <Layout/>, children:[
//     {path: "sobre", element: <Sobre/>},
//     {path: "contato", element: <Contato/>},
//   ]},
// ])

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element= {<Layout/>}>
    {<Route index element={<Inicio/>}/> /*<Route path='inicio' element={<Inicio/>}></Route> */}
    <Route path='info'>
      <Route path='sobre' element={<Sobre/>}/>
      <Route path='contato' element={<Contato/>}/>
    </Route>
  </Route>
));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
