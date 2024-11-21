
import { ContextProvider } from "./Context/Context";
import Layout from "./Layout/Layout";


const App = () => {
  return (
    <ContextProvider>
    <Layout />
    </ContextProvider>
  );
};

export default App;