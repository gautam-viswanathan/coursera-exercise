import {
  IonRippleEffect,
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
  ScrollDetail,
} from "@ionic/react";
import React, { useEffect, useRef } from "react";
import { chevronUpCircle, document, colorPalette, globe, add, push, list } from "ionicons/icons";
import "./Home.css";
import Menu from "../components/Menu";
import { useState } from "react";
import { InputChangeEventDetail, OverlayEventDetail } from "@ionic/core/components";
import Modal from "../components/Modal";

const Home: React.FC = () => {
  const [UseVariable, setUseVariable] = useState({ all_items: [] });
  const [message, setMessage] = useState("Track your expenses with a simple click");
  const update = (filter: any) => {
    setUseVariable(filter);
  };
  function handleScrollStart() {
    console.log("scroll start");
  }

  function handleScroll(ev: CustomEvent<ScrollDetail>) {
    console.log("scroll", ev.detail);
  }
  useEffect(() => {
    console.log(UseVariable.all_items);
  }, [UseVariable]);

  function handleScrollEnd() {
    console.log("scroll end");
  }

  return (
    <IonContent
      scrollEvents={true}
      onIonScrollStart={handleScrollStart}
      onIonScroll={handleScroll}
      onIonScrollEnd={handleScrollEnd}
      class="ion-padding"
    >
      <>
        <Menu />
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle className="card-content">
                <h1>Expenses Lists</h1>
              </IonCardTitle>
            </IonCardHeader>
            <IonFab slot="" vertical="bottom" horizontal="end">
              <IonFabButton id="open-modal" className="btn">
                <IonRippleEffect></IonRippleEffect>
                <IonIcon icon={add}></IonIcon>
              </IonFabButton>
            </IonFab>
            <IonCardContent className="card-content">
              <p>{message}</p>
              <Modal UseVariable={update} image={""} text={""} price={0} currency={""} currencyValue={""} />
              <IonList color="dark">
                {Object.keys(UseVariable).length !== 0 ? (
                  UseVariable.all_items.map((item) => {
                    return (
                      <IonItem className="ion-activatable ripple-parent rectangle" lines="none" slot="top">
                        <IonThumbnail slot="start">
                          <img alt="Silhouette of mountains" src={item["image"]} />
                        </IonThumbnail>
                        <p>{item["text"]}</p>
                        <p slot="end">
                          <span className="material-symbols-outlined">{[item["currency"]]}</span>
                          <span>{item["price"]}</span>
                        </p>
                        <IonRippleEffect></IonRippleEffect>
                      </IonItem>
                    );
                  })
                ) : (
                  <p>Nothing as of now</p>
                )}
              </IonList>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </>
    </IonContent>
  );
};

export default Home;
