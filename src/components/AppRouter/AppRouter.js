import React from 'react';
import {Route, Routes} from "react-router-dom"
import RequireAuth from "../../hoc/RequireAuth/RequireAuth"
import Main from "../../pages/Main/Main"

const AppRouter = () => {

  return (
    <Routes>
      <Route path={'/'} element={<Main/>} />
      <Route path={'/admin/records'} element={
        <RequireAuth>
        </RequireAuth>}/>
    </Routes>
  );
};

export default AppRouter;
