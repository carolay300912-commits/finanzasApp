import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonIcon,
  IonRouterLink,
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

          {/* TÍTULO PRINCIPAL */}
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
            <IonRouterLink routerLink="/agregar-ingreso" style={{ textDecoration: "none" }}>
              <div style={cardStyle}>
                <IonIcon icon={trendingUpOutline} style={iconStyle} />
                <span style={textStyle}>Ingresos</span>
              </div>
            </IonRouterLink>

            {/* CARD: GASTOS FALTAAAA */}
            <IonRouterLink routerLink="/agregar-egreso" style={{ textDecoration: "none" }}>
              <div style={cardStyle}>
                <IonIcon icon={trendingDownOutline} style={iconStyle} />
                <span style={textStyle}>Gastos</span>
              </div>
            </IonRouterLink>

            {/* CARD: AHORROS */}
            <IonRouterLink routerLink="/agregar-ahorro" style={{ textDecoration: "none" }}>
              <div style={cardStyle}>
                <IonIcon icon={cashOutline} style={iconStyle} />
                <span style={textStyle}>Ahorros</span>
              </div>
            </IonRouterLink>

            {/* ADMINISTRAR DEUDA */}
            <IonRouterLink routerLink="/admin-deuda" style={{ textDecoration: "none" }}>
              <div style={cardStyle}>
                <IonIcon icon={cardOutline} style={iconStyle} />
                <span style={textStyle}>Admin. Deuda</span>
              </div>
            </IonRouterLink>

            {/* DEUDA */}
            <IonRouterLink routerLink="/Deuda" style={{ textDecoration: "none" }}>
              <div style={cardStyle}>
                <IonIcon icon={addCircleOutline} style={iconStyle} />
                <span style={textStyle}>Deuda</span>
              </div>
            </IonRouterLink>

            {/* INFORMES */}
            <IonRouterLink routerLink="/Informes" style={{ textDecoration: "none" }}>
              <div style={cardStyle}>
                <IonIcon icon={documentTextOutline} style={iconStyle} />
                <span style={textStyle}>Informes</span>
              </div>
            </IonRouterLink>

            {/* NOTIFICACIONES */}
            <IonRouterLink routerLink="/Notificaciones" style={{ textDecoration: "none" }}>
              <div style={cardStyle}>
                <IonIcon icon={notificationsOutline} style={iconStyle} />
                <span style={textStyle}>Notificaciones</span>
              </div>
            </IonRouterLink>

          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

/* ESTILOS */
const cardStyle: React.CSSProperties = {
  background: "white",
  borderRadius: "12px",
  padding: "24px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const iconStyle: React.CSSProperties = {
  fontSize: "32px",
  marginBottom: "8px",
  color: "#3880ff",
};

const textStyle: React.CSSProperties = {
  fontWeight: "600",
  fontSize: "16px",
  color: "#000",
};
