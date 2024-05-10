import { Route, Routes } from 'react-router-dom'
import Topbar from './components/Topbar'
import Main from './pages/Main'
import Neon from './assets/Neon.png'
import {
  About,
  CalculateInteractions,
  SearchResult,
  InteractionDescription,
  Verification,
  VerifyData,
} from './pages'
import { MainLayout, FullLayout } from './Layout'

const App = () => (
  <div className="relative flex h-full">
    <div className="flex-1 flex flex-col bg-black md:items-center">
      <img src={Neon} alt="" className="w-screen h-screen absolute top-0 left-0 object-cover z-0" />

      <Topbar />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="/search/result" element={<SearchResult />} />
          <Route path="/calculate" element={<CalculateInteractions />} />
        </Route>
        <Route path="/about" element={<FullLayout />}>
          <Route index element={<About />} />
        </Route>
        <Route path="/description/:interactionID" element={<FullLayout />}>
          <Route index element={<InteractionDescription />} />
        </Route>
        <Route path="/verification" element={<FullLayout />}>
          <Route index element={<Verification />} />
          <Route path="result" element={<VerifyData />} />
        </Route>
      </Routes>
    </div>
  </div>
)

export default App
