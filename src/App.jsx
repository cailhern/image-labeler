import { Routes, Route } from "react-router-dom";
import { SummaryView } from "./components/SummaryView";
export function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<SummaryView />} />
    </Routes>
    </>
  )
}
