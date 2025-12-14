import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { notificationsOutline, trashOutline } from "ionicons/icons";
import { useEffect, useState } from "react";

interface Notificacion {
  mensaje: string;
  fecha: string;
}

export default function Notificaciones() {
  const [notificaciones, setNotificaciones] = useState<Notificacion[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("notificaciones");
    if (data) {
      setNotificaciones(JSON.parse(data));
    }
  }, []);

  const eliminarNotificaciones = () => {
    localStorage.removeItem("notificaciones");
    setNotificaciones([]);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Notificaciones</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        {notificaciones.length === 0 ? (
          <p>No hay notificaciones registradas.</p>
        ) : (
          <IonList>
            {notificaciones.map((n, index) => (
              <IonItem key={index}>
                <IonIcon
                  icon={notificationsOutline}
                  slot="start"
                  color="primary"
                />
                <IonLabel>
                  <h3>{n.mensaje}</h3>
                  <p>{n.fecha}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}

        <IonButton
          expand="block"
          color="danger"
          fill="outline"
          onClick={eliminarNotificaciones}
        >
          <IonIcon icon={trashOutline} slot="start" />
          Limpiar Notificaciones
        </IonButton>

      </IonContent>
    </IonPage>
  );
}
