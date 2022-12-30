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

  return (
    <>
      <Menu />
      <IonContent>
        <IonCard>
          <IonCardHeader className="">
            <IonCardTitle className="card-content">Expenses Lists</IonCardTitle>
          </IonCardHeader>
          <IonFab slot="" vertical="bottom" horizontal="end">
            <IonFabButton id="open-modal" className="btn">
              <IonIcon icon={add}></IonIcon>
            </IonFabButton>
          </IonFab>
          <IonCardContent className="card-content">
            <p>{message}</p>
            <Modal UseVariable={update} image={""} text={""} />
            <IonList>
              {Object.keys(UseVariable).length !== 0 ? (
                UseVariable.all_items.map((item) => {
                  return (
                    <IonItem className="space-bottom" slot="top">
                      <IonThumbnail slot="start">
                        <img alt="Silhouette of mountains" src={item["image"]} />
                      </IonThumbnail>
                      <p>{item["text"]}</p>
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
  );
};

export default Home;
