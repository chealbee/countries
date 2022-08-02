import { Route, Routes } from "react-router-dom";
import Container from "./components/container/Container";
import Details from "./components/details/Details";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import NotFound from "./components/notFoundPage/NotFound";

function App() {
   return (
      <div className="App">
         <Header></Header>
         <Container>
            <Routes>
               <Route path="/" element={<Main />} />
               <Route path="*" element={<NotFound />} />
               <Route path="/details/:country" element={<Details />} />
            </Routes>
         </Container>
      </div>
   );
}

export default App;
