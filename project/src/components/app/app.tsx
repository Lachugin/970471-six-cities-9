import Main from '../main/main';

type AppProps = {
  ads: number;
}

function App({ads}: AppProps): JSX.Element {
  return (
    <Main ads={ads} />
  );
}

export default App;
