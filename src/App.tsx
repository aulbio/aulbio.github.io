import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [showAlert, setAlertVisibility] = useState(false);

  return (
    <div>
      {showAlert && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello this is me
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)} color="primary">
        My pinky toe
      </Button>
    </div>
  );
}

export default App;
