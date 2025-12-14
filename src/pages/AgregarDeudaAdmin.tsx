import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/react";

import { useState } from "react";

export default function AgregarDeudaAdmin() {
  const [nombre, setNombre] = useState("");
  const [monto, setMonto] = useState("");
  const [fecha, setFecha] = useState("");
  const [observacion, setObservacion] = useState("");

  const guardarDeuda = () => {
    if (!nombre || !monto || !fecha || !observacion) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const nuevaDeuda = {
      nombre,
      monto: Number(monto),
      fecha,
      observacion,
    };

    const lista = JSON.parse(localStorage.getItem("deudasAdmin") || "[]");
    lista.push(nuevaDeuda);

    localStorage.setItem("deudasAdmin", JSON.stringify(lista));

    alert("Deuda guardada correctamente.");
    window.location.href = "/AdministrarDeuda";
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Agregar Nueva Deuda</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>

          <IonItem>
            <IonLabel position="floating">Nombre de la deuda</IonLabel>
            <IonInput
              value={nombre}
              onIonChange={(e) => setNombre(e.detail.value!)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Monto</IonLabel>
            <IonInput
              type="number"
              value={monto}
              onIonChange={(e) => setMonto(e.detail.value!)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Fecha</IonLabel>
            <IonInput
              type="date"
              value={fecha}
              onIonChange={(e) => setFecha(e.detail.value!)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Observación</IonLabel>
            <IonInput
              value={observacion}
              onIonChange={(e) => setObservacion(e.detail.value!)}
            />
          </IonItem>

        </IonList>

        <IonButton expand="block" color="primary" onClick={guardarDeuda}>
          Guardar
        </IonButton>

        <IonButton expand="block" fill="outline" routerLink="/AdministrarDeuda">
          Volver
        </IonButton>
      </IonContent>
    </IonPage>
  );
}
