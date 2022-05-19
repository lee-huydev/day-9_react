import { Route, Routes } from 'react-router-dom';
import * as PAGES from './pages';
import Layout from './container/Layout';
function App() {
   return (
      <>
         <Layout>
            <Routes>
               <Route path="/" element={<PAGES.Home />} />
               <Route path="/login" element={<PAGES.Login />} />
               <Route path="/signup" element={<PAGES.SignUp />} />
               <Route path="/user" element={<PAGES.User />} />
            </Routes>
         </Layout>
      </>
   );
}

export default App;
