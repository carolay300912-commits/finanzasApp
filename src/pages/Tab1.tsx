import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonIcon,
} from "@ionic/react";

import {
  addCircleOutline,
  cardOutline,
  cashOutline,
  trendingDownOutline,
  trendingUpOutline,
  notificationsOutline,
  documentTextOutline,
} from "ionicons/icons";

export default function Inicio() {
  return (
    <IonPage>

      {/* HEADER */}
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle style={{ fontWeight: "600" }}>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* CONTENIDO */}
      <IonContent fullscreen style={{ backgroundColor: "#f4f5f8" }}>

        <div style={{ padding: "20px" }}>

          {/* TITULO PRINCIPAL */}
          <h2 style={{ fontWeight: "700", marginBottom: "16px" }}>
            ¿Qué deseas gestionar hoy?
          </h2>

          {/* GRID DE OPCIONES */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
            }}
          >

            {/* CARD: INGRESOS */}
            <div
              onClick={() => (window.location.href = "/AgregarIngreso")}
              style={cardStyle}
            >
              <IonIcon icon={trendingUpOutline} style={iconStyle} />
              <span style={textStyle}>Ingresos</span>
            </div>

            {/* CARD: GASTOS */}
            <div
              onClick={() => (window.location.href = "/AgregarGasto")}
              style={cardStyle}
            >
              <IonIcon icon={trendingDownOutline} style={iconStyle} />
              <span style={textStyle}>Gastos</span>
            </div>

            {/* CARD: AHORROS */}
            <div
              onClick={() => (window.location.href = "/Ahorros")}
              style={cardStyle}
            >
              <IonIcon icon={cashOutline} style={iconStyle} />
              <span style={textStyle}>Ahorros</span>
            </div>

            {/* ADMINISTRAR DEUDA */}
            <div
              onClick={() => (window.location.href = "/AdministrarDeuda")}
              style={cardStyle}
            >
              <IonIcon icon={cardOutline} style={iconStyle} />
              <span style={textStyle}>Admin. Deuda</span>
            </div>

            {/* DEUDA */}
            <div
              onClick={() => (window.location.href = "/Deuda")}
              style={cardStyle}
            >
              <IonIcon icon={addCircleOutline} style={iconStyle} />
              <span style={textStyle}>Deuda</span>
            </div>

            {/* INFORMES */}
            <div
              onClick={() => (window.location.href = "/Informes")}
              style={cardStyle}
            >
              <IonIcon icon={documentTextOutline} style={iconStyle} />
              <span style={textStyle}>Informes</span>
            </div>

            {/* NOTIFICACIONES */}
            <div
              onClick={() => (window.location.href = "/Notificaciones")}
              style={cardStyle}
            >
              <IonIcon icon={notificationsOutline} style={iconStyle} />
              <span style={textStyle}>Notificaciones</span>
            </div>

          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

/* ------------------ ESTILOS MODERNOS ------------------ */

const cardStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  padding: "18px",
  borderRadius: "16px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "0.2s",
};

const iconStyle: React.CSSProperties = {
  fontSize: "32px",
  color: "#3880ff",
  marginBottom: "6px",
};

const textStyle: React.CSSProperties = {
  fontSize: "15px",
  fontWeight: "600",
};
