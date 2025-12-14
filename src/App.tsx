import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { home, addCircle, wallet } from "ionicons/icons";

// Pages
import Tab1 from "./pages/Tab1";
import AgregarIngreso from "./pages/AgregarIngreso";
import AgregarAhorro from "./pages/AgregarAhorro";
import AgregarEgreso from "./pages/AgregarEgreso";
import AdminDeuda from "./pages/AdminDeuda";
import AgregarDeudaAdmin from "./pages/AgregarDeudaAdmin";
import Deuda from "./pages/Deuda";
import Informes from "./pages/Informes";
import Notificaciones from "./pages/Notificaciones";


/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";


/* Optional CSS utils */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Dark theme (system-based) */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>

          {/* --- INICIO --- */}
          <Route exact path="/Inicio">
            <Tab1 />
          </Route>

          {/* --- AGREGAR INGRESO --- */}
          <Route exact path="/agregar-ingreso">
            <AgregarIngreso />
          </Route>

 {/* --- AGREGAR AHORRO --- */}
          <Route exact path="/agregar-ahorro">
  <AgregarAhorro />
</Route>

 {/* --- AGREGAR EGRESO --- */}
<Route exact path="/agregar-egreso">
  <AgregarEgreso />
</Route>

 {/* --- AGREGAR DEUDA --- */}
<Route exact path="/admin-deuda">
  <AdminDeuda />
</Route>

<Route exact path="/agregar-deuda-admin">
  <AgregarDeudaAdmin />
</Route>

<Route exact path="/deuda">
  <Deuda />
</Route>

 {/* --- AGREGAR INFORMES --- */}
<Route exact path="/informes">
  <Informes />
</Route>




          {/* REDIRECCIÓN */}
          <Route exact path="/">
            <Redirect to="/Inicio" />
          </Route>

  
 
        </IonRouterOutlet>

        {/* TAB BAR (MENÚ INFERIOR) */}
        <IonTabBar slot="bottom">

          <IonTabButton tab="inicio" href="/Inicio">
            <IonIcon icon={home} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>

        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

