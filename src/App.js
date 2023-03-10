import { Container } from "./components/container/container";
import { Info } from "./components/info/info";
import { Legend } from "./components/legend/legend";
import { MoviePicker } from "./components/movie-picker/movie-picker";
import { Screen } from "./components/screen/screen";
import { Seats } from "./components/seats/seats";

function App() {
  return (
    <>
      <MoviePicker />
      <Legend />
      <Container>
        <Screen />
        <Seats />
      </Container>
      <Info />
    </>
  );
}

export default App;
