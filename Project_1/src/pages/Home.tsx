import {
  IonToolbar,
  IonButton,
  IonButtons,
  IonTitle,
  IonInput,
  IonItem,
  IonHeader,
  IonModal,
  IonContent,
  IonCard,
  IonIcon,
  IonFab,
  IonFabButton,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonList,
  IonThumbnail,
  IonLabel,
} from "@ionic/react";
import React, { useRef } from "react";
import { chevronUpCircle, document, colorPalette, globe, add, push, list } from "ionicons/icons";
import "./Home.css";
import Menu from "../components/Menu";
import { useState } from "react";
import { OverlayEventDetail } from "@ionic/core/components";

const Home: React.FC = () => {
  const addItem = () => {};
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);
  const [message, setMessage] = useState("Track your expenses with a simple click");
  function confirm() {
    modal.current?.dismiss(input.current?.value, "confirm");
  }
  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === "confirm") {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }
  const [items, setItems] = useState();

  return (
    <>
      <Menu />
      <IonContent>
        <IonCard>
          <IonCardHeader className="card-place">
            <IonCardTitle className="card-content">Expenses Lists</IonCardTitle>
          </IonCardHeader>
          <IonFab slot="" vertical="bottom" horizontal="end">
            <IonFabButton id="open-modal" className="btn">
              <IonIcon icon={add}></IonIcon>
            </IonFabButton>
          </IonFab>
          <IonCardContent className="card-content">
            <p>{message}</p>
            <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
              <IonHeader>
                <IonToolbar>
                  <IonButtons slot="start">
                    <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                  </IonButtons>
                  <IonTitle>Enter the expenses</IonTitle>
                  <IonButtons slot="end">
                    <IonButton strong={true} onClick={() => confirm()}>
                      Confirm
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">
                <IonItem>
                  <IonLabel position="floating">Enter your name</IonLabel>
                  <IonInput ref={input} type="text" placeholder="Your name" />
                </IonItem>
              </IonContent>
            </IonModal>
            <IonList>
              <IonItem slot="top">
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
                <IonInput placeholder="enter"></IonInput>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </>
  );
};

export default Home;
