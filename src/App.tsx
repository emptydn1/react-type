import imga from "./a.jpg";

const App = () => {
  return (
    <div>
      <img src={imga} />
      {process.env.name}
    </div>
  );
};

export default App;
