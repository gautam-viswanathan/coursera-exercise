import { IonHeader, IonModal, IonToolbar, IonButtons, IonButton, IonTitle, IonContent, IonItem, IonLabel, IonInput } from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import { InputChangeEventDetail, OverlayEventDetail } from "@ionic/core/components";
interface Item {
  image: string;
  text: string;
  UseVariable: any;
}

const Modal: React.FC<Item> = ({ UseVariable }) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);
  const [all_items, setItems] = useState<Item[]>([]);

  function confirm() {
    modal.current?.dismiss(input.current?.value, "confirm");
  }

  function expense(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === "confirm") {
      all_items.push({ image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", text: event.detail.data, UseVariable });
      UseVariable({ all_items });
    }
  }

  return (
    <>
      <IonModal ref={modal} trigger="open-modal" onWillDismiss={(event) => expense(event)}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
            </IonButtons>
            <IonTitle>Enter your expenses</IonTitle>
            <IonButtons slot="end">
              <IonButton strong={true} onClick={() => confirm()}>
                Confirm
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Expenditure on:</IonLabel>
            <IonInput ref={input} type="text" placeholder="Your name" />
          </IonItem>
        </IonContent>
      </IonModal>
    </>
  );
};
export default Modal;
