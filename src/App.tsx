import { ErrorMessage } from "./components/atoms/error-message";
import { Message } from "./components/atoms/message";
import { Spinner } from "./components/atoms/spinner";
import { SearchForm } from "./components/organisms/search-form";
import { usePricesUIStore } from "./store/pricesUI.store";

function App() {
  const { state } = usePricesUIStore();
  console.log("in app", state);

  return (
    <>
      <SearchForm />
      {state.status === "loading" && <Spinner />}
      {state.status === "error" && <ErrorMessage message={state.message} />}
      {state.status === "empty" && <Message />}
      {state.status === "success" && <p>Success</p>}
    </>
  );
}

export default App;
