import Game from "@/pages/game";
import Home from "@/pages/home";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>loading</div>}>
            <Home />
          </Suspense>
        }
      />
      <Route path="/game" element={<Game />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default Root;
