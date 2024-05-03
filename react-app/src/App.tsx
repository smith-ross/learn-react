import { useState } from "react";
import Alert from "./components/Alert";
import Button, { ButtonColor } from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertText, setAlertText] = useState("");

  let buttons: [string, ButtonColor?][] = [
    ["Among us", "primary"],
    ["Overwatch", "secondary"],
    ["PUBG", "success"],
    ["League of Legends"],
  ];
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>{alertText}</Alert>
      )}
      {buttons.map((valueList) => {
        return (
          <Button
            buttonType={valueList[1]}
            onButtonClick={() => {
              setAlertVisible(true);
              setAlertText(valueList[0]);
            }}
          >
            {valueList[0]}
          </Button>
        );
      })}
    </div>
  );
}

export default App;
