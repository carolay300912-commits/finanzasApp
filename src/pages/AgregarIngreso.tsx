import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import { useState } from "react";

interface Ingreso {
  id: number;
  descripcion: string;
  monto: string;
  fecha: string;
}

export default function AgregarIngreso() {
  const [descripcion, setDescripcion] = useState("");
  const [monto, setMonto] = useState("");
  const [fecha, setFecha] = useState("");

  const [ingresos, setIngresos] = useState<Ingreso[]>(() => {
    const guardados = localStorage.getItem("ingresos");
    return guardados ? (JSON.parse(guardados) as Ingreso[]) : [];
  });

  const syncLocalStorage = (lista: Ingreso[]) => {
    localStorage.setItem("ingresos", JSON.stringify(lista));
  };

  const guardarIngreso = () => {
    if (!descripcion || !monto || !fecha) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const nuevoIngreso: Ingreso = {
      id: Date.now(),
      descripcion,
      monto,
      fecha,
    };

    const actualizado = [...ingresos, nuevoIngreso];
    setIngresos(actualizado);
    syncLocalStorage(actualizado);

    alert("Ingreso agregado correctamente");
    setDescripcion("");
    setMonto("");
    setFecha("");
  };

  const eliminarIngreso = (id: number) => {
    const filtrados = ingresos.filter((ing) => ing.id !== id);
    setIngresos(filtrados);
    syncLocalStorage(filtrados);
  };

  // 👉 Total correctamente calculado
  const totalIngresos = ingresos.reduce((acc, ing) => acc + Number(ing.monto), 0);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonTitle>Agregar Ingreso</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <h2 style={{ fontWeight: "700" }}>Registrar Ingreso</h2>

        {/* TOTAL DE INGRESOS */}
        <h3 style={{ marginTop: "10px", fontWeight: "600" }}>
          Total de ingresos: $ {totalIngresos}
        </h3>

        <IonList>
          <IonItem>
            <IonLabel position="floating">Descripción del ingreso</IonLabel>
            <IonInput
              value={descripcion}
              onIonChange={(e) => setDescripcion(e.detail.value!)}
              required
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Monto</IonLabel>
            <IonInput
              type="number"
              value={monto}
              onIonChange={(e) => setMonto(e.detail.value!)}
              required
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Fecha</IonLabel>
            <IonInput
              type="date"
              value={fecha}
              onIonChange={(e) => setFecha(e.detail.value!)}
              required
            />
          </IonItem>
        </IonList>

        <IonButton
          expand="block"
          color="success"
          style={{ marginTop: "20px" }}
          onClick={guardarIngreso}
        >
          Guardar Ingreso
        </IonButton>

        <IonButton
          expand="block"
          fill="outline"
          color="medium"
          style={{ marginTop: "10px" }}
          routerLink="/Inicio"
        >
          Volver al Inicio
        </IonButton>

        <h2 style={{ marginTop: "30px", fontWeight: "700" }}>
          Ingresos Registrados
        </h2>

        {ingresos.length === 0 ? (
          <p>No hay ingresos registrados aún.</p>
        ) : (
          ingresos.map((ing) => (
            <IonCard key={ing.id}>
              <IonCardHeader>
                <IonCardTitle>{ing.descripcion}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  <strong>Monto:</strong> ${ing.monto}
                </p>
                <p>
                  <strong>Fecha:</strong> {ing.fecha}
                </p>

                <IonButton
                  color="danger"
                  expand="block"
                  onClick={() => eliminarIngreso(ing.id)}
                >
                  Eliminar
                </IonButton>
              </IonCardContent>
            </IonCard>
          ))
        )}
      </IonContent>
    </IonPage>
  );
}
