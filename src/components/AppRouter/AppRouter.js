import React from 'react';
import {Route, Routes} from "react-router-dom"
import RequireAuth from "../../hoc/RequireAuth/RequireAuth"
import Main from "../../pages/Main/Main"
import Registration from "../../pages/Registration/Registration"
import Catalogue from "../../pages/Catalogue/Catalogue"
import Authorization from "../../pages/Authorization/Authorization"

const AppRouter = () => {

  return (
    <Routes>
      <Route path={'/'} element={<Main/>} />
      <Route path={'/signUp'} element={<Registration/>} />
      <Route path={'/signIn'} element={<Authorization/>} />
      <Route path={'/catalogue'} element={
        <RequireAuth>
          <Catalogue/>
        </RequireAuth>}/>
    </Routes>
  );
};

export default AppRouter;
