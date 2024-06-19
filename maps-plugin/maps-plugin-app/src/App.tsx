import { IonApp, IonButton, setupIonicReact } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";

import "@ionic/react/css/palettes/dark.system.css";

import "./theme/variables.css";
import { useEffect } from "react";

import { MapsOffline } from "maps-offline";

setupIonicReact();

const App: React.FC = () => {
  useEffect(() => {
    MapsOffline.initialize({
      accessToken:
        "pk.eyJ1IjoiZG15dHJvMTIzNDEyMyIsImEiOiJjbHhrN3RkNGgwMGJ4MmtyM2p1NTZtcTI4In0.C98LiKnQTnerkBbniJaxRw",
    });
  }, []);

  const showMap = () => {
    MapsOffline.showMap({ latitude: 50.4501, longitude: 30.5234, zoom: 10 });
  };
  return (
    <IonApp>
      <IonButton onClick={showMap}>Add map</IonButton>
    </IonApp>
  );
};

export default App;
