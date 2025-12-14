import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
  IonIcon,
} from "@ionic/react";

import { trashOutline } from "ionicons/icons";
import { useEffect, useState } from "react";

export default function AdminDeuda() {
  const [deudas, setDeudas] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("deudasAdmin") || "[]");
    setDeudas(data);
  }, []);

  const eliminarDeuda = (index: number) => {
    const nuevaLista = [...deudas];
    nuevaLista.splice(index, 1);

    localStorage.setItem("deudasAdmin", JSON.stringify(nuevaLista));
    setDeudas(nuevaLista);

    alert("Deuda eliminada correctamente");
  };

  const formatoFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Administrar Deudas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonButton expand="block" color="primary" routerLink="/agregar-deuda-admin">
          Agregar Nueva Deuda
        </IonButton>

        <h2 style={{ marginTop: "20px" }}>Listado de Deudas</h2>

        <IonList>
          {deudas.length === 0 ? (
            <p>No tienes deudas registradas.</p>
          ) : (
            deudas.map((item, index) => (
              <IonItem key={index}>
                <IonLabel>
                  <h2>{item.nombre}</h2>
                  <p>Monto: ${item.monto}</p>
                  <p>Fecha: {formatoFecha(item.fecha)}</p>
                  <p>Observación: {item.observacion}</p>
                </IonLabel>

                <IonBadge color="medium">Deuda</IonBadge>

                <IonButton
                  color="danger"
                  fill="clear"
                  onClick={() => eliminarDeuda(index)}
                >
                  <IonIcon icon={trashOutline} />
                </IonButton>
              </IonItem>
            ))
          )}
        </IonList>

        <IonButton expand="block" fill="outline" routerLink="/Inicio">
          Volver al Inicio
        </IonButton>

      </IonContent>
    </IonPage>
  );
}
