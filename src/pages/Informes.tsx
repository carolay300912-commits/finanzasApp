import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonList,
} from "@ionic/react";

import { useEffect, useState } from "react";

// Gráficos
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Informes() {

  // Estados
  const [ingresos, setIngresos] = useState<any[]>([]);
  const [gastos, setGastos] = useState<any[]>([]);
  const [ahorros, setAhorros] = useState<any[]>([]);
  const [deudas, setDeudas] = useState<any[]>([]);

  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");

  // Cargar datos desde localStorage
  useEffect(() => {
    setIngresos(JSON.parse(localStorage.getItem("ingresos") || "[]"));
    setGastos(JSON.parse(localStorage.getItem("gastos") || "[]"));
    setAhorros(JSON.parse(localStorage.getItem("ahorros") || "[]"));
    setDeudas(JSON.parse(localStorage.getItem("deudas") || "[]"));
  }, []);

  // Filtro por fecha
  const filtrarPorFecha = (lista: any[]) => {
    if (!fechaInicio || !fechaFin) return lista;

    return lista.filter((item) => {
      const fecha = new Date(item.fecha);
      return (
        fecha >= new Date(fechaInicio) &&
        fecha <= new Date(fechaFin)
      );
    });
  };

  // Datos filtrados
  const ingresosFiltrados = filtrarPorFecha(ingresos);
  const gastosFiltrados = filtrarPorFecha(gastos);
  const ahorrosFiltrados = filtrarPorFecha(ahorros);
  const deudasFiltradas = filtrarPorFecha(deudas);

  // Totales
  const totalIngresos = ingresosFiltrados.reduce((a, b) => a + Number(b.monto), 0);
  const totalGastos = gastosFiltrados.reduce((a, b) => a + Number(b.monto), 0);
  const totalAhorros = ahorrosFiltrados.reduce((a, b) => a + Number(b.monto), 0);
  const totalDeudas = deudasFiltradas.reduce((a, b) => a + Number(b.monto), 0);

  // Datos gráficos
  const dataResumen = [
    { name: "Ingresos", value: totalIngresos },
    { name: "Gastos", value: totalGastos },
    { name: "Ahorros", value: totalAhorros },
    { name: "Deudas", value: totalDeudas },
  ];

  const colores = ["#4caf50", "#f44336", "#2196f3", "#ff9800"];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Informes Financieros</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">


        {/* FILTROS */}
        <h2>Filtros por Fecha</h2>

        <IonItem>
          <IonLabel>Desde</IonLabel>
          <IonInput
            type="date"
            value={fechaInicio}
            onIonChange={(e) => setFechaInicio(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel>Hasta</IonLabel>
          <IonInput
            type="date"
            value={fechaFin}
            onIonChange={(e) => setFechaFin(e.detail.value!)}
          />
        </IonItem>

        <IonButton expand="block" color="secondary">
          Aplicar Filtros
        </IonButton>

        <hr />

        {/* GRÁFICO GENERAL */}
        <h2>Resumen General</h2>

        <PieChart width={320} height={300}>
          <Pie
            data={dataResumen}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {dataResumen.map((_, i) => (
              <Cell key={i} fill={colores[i]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        <hr />


        {/* INGRESOS */}
        <h2>Ingresos</h2>
        <p>Total: <b>${totalIngresos}</b></p>

        <IonList>
          {ingresosFiltrados.map((x, i) => (
            <IonItem key={i}>
              <IonLabel>
                {x.descripcion} — ${x.monto}  
                <br /> Fecha: {x.fecha}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

        <hr />


        {/* GASTOS */}
        <h2>Gastos</h2>
        <p>Total: <b>${totalGastos}</b></p>

        <IonList>
          {gastosFiltrados.map((x, i) => (
            <IonItem key={i}>
              <IonLabel>
                {x.descripcion} — ${x.monto}
                <br /> Fecha: {x.fecha}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

        <hr />


        {/* AHORROS */}
        <h2>Ahorros</h2>
        <p>Total: <b>${totalAhorros}</b></p>

        <IonList>
          {ahorrosFiltrados.map((x, i) => (
            <IonItem key={i}>
              <IonLabel>
                {x.nombre} — ${x.monto}
                <br /> Fecha: {x.fecha}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

        <hr />


        {/* DEUDAS */}
        <h2>Deudas</h2>
        <p>Total: <b>${totalDeudas}</b></p>

        <IonList>
          {deudasFiltradas.map((x, i) => (
            <IonItem key={i}>
              <IonLabel>
                {x.nombre} — ${x.monto}
                <br /> Fecha: {x.fecha}
                <br /> Obs: {x.observacion}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

      </IonContent>
    </IonPage>
  );
}
