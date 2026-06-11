import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <div className="background-shapes">
        <div className="shape one"></div>
        <div className="shape two"></div>
        <div className="shape three"></div>
      </div>

      <AppRoutes />
    </>
  );
}

export default App;