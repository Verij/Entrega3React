import { Layout } from "../components/layout/Layout";
import { Route, Routes as ReactDomRoutes } from 'react-router-dom';



import Todo from '../pages/todo/Todo';
import { Home }from '../pages/home/Home';
import Poke from "../pages/poke/Poke";

function Routes() {

  return (
    <Layout>
      <ReactDomRoutes>
        <Route path='/' element={<Home />} />
        <Route path='poke' element={< Poke/>} />
        <Route path='todo' element={< Todo/>} />
      </ReactDomRoutes>
    </Layout>
  );
}

export default Routes;