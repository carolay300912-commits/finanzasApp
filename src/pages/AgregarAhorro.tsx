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
  IonDatetime,
} from "@ionic/react";
import { useState } from "react";

interface Ahorro {
  id: number;
  meta: string;
  monto: string;
  descripcion: string;
  fecha: string;   // 👉 FECHA AGREGADA
}

export default function AgregarAhorro() {
  const [meta, setMeta] = useState("");
  const [monto, setMonto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");  // 👉 FECHA EN EL ESTADO

  const [ahorros, setAhorros] = useState<Ahorro[]>(() => {
    const guardados = localStorage.getItem("ahorros");
    return guardados ? (JSON.parse(guardados) as Ahorro[]) : [];
  });

  const syncLocalStorage = (lista: Ahorro[]) => {
    localStorage.setItem("ahorros", JSON.stringify(lista));
  };

  const guardarAhorro = () => {
    if (!meta || !monto || !descripcion || !fecha) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const nuevoAhorro: Ahorro = {
      id: Date.now(),
      meta,
      monto,
      descripcion,
      fecha,   // 👉 GUARDAR FECHA
    };

    const actualizado = [...ahorros, nuevoAhorro];
    setAhorros(actualizado);
    syncLocalStorage(actualizado);

    alert("Ahorro registrado correctamente");

    setMeta("");
    setMonto("");
    setDescripcion("");
    setFecha("");  // 👉 LIMPIAR FECHA
  };

  const eliminarAhorro = (id: number) => {
    const filtrados = ahorros.filter((a) => a.id !== id);
    setAhorros(filtrados);
    syncLocalStorage(filtrados);
  };

  // 👉 Total de ahorros
  const totalAhorros = ahorros.reduce((acc, a) => acc + Number(a.monto), 0);

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar color="success">
          <IonTitle>Agregar Ahorro</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>

        <h2 style={{ fontWeight: "700" }}>Registrar Ahorro</h2>

        <h3 style={{ marginTop: "10px", fontWeight: "600" }}>
          Total ahorrado: $ {totalAhorros}
        </h3>

        <IonList>

          {/* META */}
          <IonItem>
            <IonLabel position="floating">Meta de ahorro</IonLabel>
            <IonInput
              value={meta}
              onIonChange={(e) => setMeta(e.detail.value!)}
              required
            />
          </IonItem>

          {/* MONTO */}
          <IonItem>
            <IonLabel position="floating">Monto a guardar</IonLabel>
            <IonInput
              type="number"
              value={monto}
              onIonChange={(e) => setMonto(e.detail.value!)}
              required
            />
          </IonItem>

          {/* DESCRIPCIÓN */}
          <IonItem>
            <IonLabel position="floating">Descripción</IonLabel>
            <IonInput
              value={descripcion}
              onIonChange={(e) => setDescripcion(e.detail.value!)}
              required
            />
          </IonItem>

          {/* FECHA */}
          <IonItem>
            <IonLabel>Fecha del ahorro</IonLabel>
            <IonDatetime
              presentation="date"
              value={fecha}
              onIonChange={(e) => {
                const value = e.detail.value;
                setFecha(Array.isArray(value) ? value[0] : value || "");
              }}
            />
          </IonItem>

        </IonList>

        {/* BOTÓN GUARDAR */}
        <IonButton
          expand="block"
          color="success"
          style={{ marginTop: "20px" }}
          onClick={guardarAhorro}
        >
          Guardar Ahorro
        </IonButton>

        {/* BOTÓN VOLVER */}
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
          Ahorros Registrados
        </h2>

        {ahorros.length === 0 ? (
          <p>No hay ahorros registrados aún.</p>
        ) : (
          ahorros.map((a) => (
            <IonCard key={a.id}>
              <IonCardHeader>
                <IonCardTitle>{a.meta}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p><strong>Monto:</strong> ${a.monto}</p>
                <p><strong>Descripción:</strong> {a.descripcion}</p>
                <p><strong>Fecha:</strong> {a.fecha}</p>

                <IonButton
                  color="danger"
                  expand="block"
                  onClick={() => eliminarAhorro(a.id)}
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
