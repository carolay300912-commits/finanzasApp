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
} from "@ionic/react";
import { useState } from "react";

type Egreso = {
  id: number;
  descripcion: string;
  monto: number;
  categoria: string;
  fecha: string;   // <-- AGREGADO
};

export default function AgregarEgreso() {
  const [descripcion, setDescripcion] = useState("");
  const [monto, setMonto] = useState<number>(0);
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");   // <-- AGREGADO
  const [egresos, setEgresos] = useState<Egreso[]>([]);

  const guardarGasto = () => {
    if (!descripcion || !monto || !categoria || !fecha) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const nuevoEgreso: Egreso = {
      id: Date.now(),
      descripcion,
      monto,
      categoria,
      fecha,   // <-- AGREGADO
    };

    setEgresos([...egresos, nuevoEgreso]);

    setDescripcion("");
    setMonto(0);
    setCategoria("");
    setFecha("");   // <-- LIMPIAR FECHA

    alert("Gasto agregado correctamente");
  };

  const eliminarGasto = (id: number) => {
    setEgresos(egresos.filter((e) => e.id !== id));
  };

  const totalEgresos = egresos.reduce((acc, eg) => acc + eg.monto, 0);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>Agregar Gasto</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <h2 style={{ fontWeight: "700" }}>Registrar Gasto</h2>

        <h3 style={{ marginTop: "10px", fontWeight: "600" }}>
          Total de egresos: $ {totalEgresos}
        </h3>

        <IonList>

          <IonItem>
            <IonLabel position="floating">Descripción del gasto</IonLabel>
            <IonInput
              value={descripcion}
              onIonChange={(e) => setDescripcion(e.detail.value!)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Monto</IonLabel>
            <IonInput
              type="number"
              value={monto}
              onIonChange={(e) => setMonto(Number(e.detail.value))}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Categoría</IonLabel>
            <IonInput
              value={categoria}
              onIonChange={(e) => setCategoria(e.detail.value!)}
            />
          </IonItem>

          {/* FECHA */}
          <IonItem>
            <IonLabel position="floating">Fecha</IonLabel>
            <IonInput
              type="date"
              value={fecha}
              onIonChange={(e) => setFecha(e.detail.value!)}
            />
          </IonItem>

        </IonList>

        <IonButton
          expand="block"
          color="danger"
          style={{ marginTop: "20px" }}
          onClick={guardarGasto}
        >
          Guardar Gasto
        </IonButton>

        {/* LISTA DE EGRESOS */}
        <h3 style={{ marginTop: "20px" }}>Lista de egresos</h3>

        <IonList>
          {egresos.map((eg) => (
            <IonItem key={eg.id}>
              <IonLabel>
                <p><strong>{eg.descripcion}</strong></p>
                <p>Monto: ${eg.monto}</p>
                <p>Categoría: {eg.categoria}</p>
                <p>Fecha: {eg.fecha}</p> {/* <-- MOSTRAR FECHA */}
              </IonLabel>

              <IonButton color="danger" onClick={() => eliminarGasto(eg.id)}>
                Eliminar
              </IonButton>
            </IonItem>
          ))}
        </IonList>

        <IonButton
          expand="block"
          fill="outline"
          color="medium"
          style={{ marginTop: "10px" }}
          routerLink="/Inicio"
        >
          Volver al Inicio
        </IonButton>
      </IonContent>
    </IonPage>
  );
}
