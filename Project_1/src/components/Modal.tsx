import {
  IonHeader,
  IonModal,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonIcon,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React, { useEffect, useRef, useState } from "react";
import { InputChangeEventDetail, OverlayEventDetail } from "@ionic/core/components";
interface Item {
  image: string;
  text: string;
  UseVariable: any;
  price: number;
  currency: string;
  currencyValue: string;
}

const Modal: React.FC<Item> = ({ UseVariable }) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [finance, setFinance] = useState("");
  const [expenditure, setExpenditure] = useState(0);
  const [all_items] = useState<Item[]>([]);
  const [currency, setCurrency] = useState("");
  const [currencyValue, setCurrencyValue] = useState("");

  function confirm() {
    modal.current?.dismiss([], "confirm");
  }

  function expense(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === "confirm") {
      all_items.push({
        image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
        text: finance,
        price: expenditure,
        currency: currency,
        currencyValue: currencyValue,
        UseVariable,
      });
      UseVariable({ all_items });
    }
  }

  return (
    <>
      <IonModal ref={modal} trigger="open-modal" color="" onWillDismiss={(event) => expense(event)}>
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
            <IonLabel>Expenditure on:</IonLabel>
            <IonInput
              //   ref={input}
              onIonChange={(e: any) => {
                setFinance(e.target.value);
              }}
              type="text"
              placeholder="Item you spent on"
            />
          </IonItem>
          <IonItem>
            <IonLabel> Amount Paid: </IonLabel>
            <IonSelect
              onIonChange={(e: any) => {
                setCurrency(e.target.value);
              }}
              placeholder="Select Currency"
            >
              <IonSelectOption value="currency_rupee">INR ₹:</IonSelectOption>
              <IonSelectOption value="attach_money">USD $:</IonSelectOption>
              <IonSelectOption value="euro">EUR €:</IonSelectOption>
            </IonSelect>
            <IonInput
              onIonChange={(f: any) => {
                setExpenditure(f.target.value);
              }}
              type="number"
              placeholder="Price Paid"
            />
          </IonItem>
        </IonContent>
      </IonModal>
    </>
  );
};
export default Modal;
