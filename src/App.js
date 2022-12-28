import { Fragment, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const PostsManagement = lazy(() => import("./pages/PostsManagement"));
const Settings = lazy(() => import("./pages/Settings"));
const Subcription = lazy(() => import("./components/dashboard/Subcription"));
const Revenue = lazy(() => import("./components/dashboard/Revenue"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Main />}>
            <Route path="/">
              <Route path="dashboard" element={<Dashboard />}>
                <Route path="subscription" element={<Subcription />} />
                <Route path="revenue" element={<Revenue />} />
              </Route>
            </Route>
            <Route path="/postsmanagement" element={<PostsManagement />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
