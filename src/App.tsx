import { useEffect } from "react";
import { ErrorMessage } from "./components/atoms/error-message";
import { Message } from "./components/atoms/message";
import { Spinner } from "./components/atoms/spinner";
import { SearchForm } from "./components/organisms/search-form";
import { usePricesUIStore } from "./store/pricesUI.store";
import { useHotels } from "./hooks/useHotels";
import { useCountryStore } from "./store/country.store";
import { CardList } from "./components/organisms/card-list";
import { Container } from "./components/templates/container";

function App() {
  const { state } = usePricesUIStore();
  const { hotelsWithPrices, searchHotels } = useHotels();
  const { country } = useCountryStore();

  useEffect(() => {
    const fetchData = async () => {
      if (state.status === "success") {
        await searchHotels(country?.id as string);
      }
    };

    fetchData();
  }, [country?.id, state.status]);

  return (
    <>
      <SearchForm />
      {state.status === "loading" && <Spinner />}
      {state.status === "error" && <ErrorMessage message={state.message} />}
      {state.status === "empty" && <Message />}
      {state.status === "success" && hotelsWithPrices.length > 0 && (
        <Container>
          <CardList cards={hotelsWithPrices} countryFlag={country?.flag} />
        </Container>
      )}
    </>
  );
}

export default App;
