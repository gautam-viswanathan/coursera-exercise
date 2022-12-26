import {
  IonContent,
  IonHeader,
  IonMenu,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonIcon,
  IonButton,
  IonRouterOutlet,
  IonItem,
  IonImg,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { Redirect, Route } from "react-router-dom";
import { person, card, cash } from "ionicons/icons";
import "./Home.css";
import Menu from "../components/Menu";
import Profile from "./Profile";

const Home: React.FC = () => {
  return (
    <>
      <Menu />
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>
              <IonIcon icon={cash} className="fineIcon" />
              Fine way
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonImg className="background" src="assets/shapes.svg" />
        <IonContent className="trans-item">Tap the button in the toolbar to open the menu.</IonContent>
      </IonPage>
    </>
  );
};

export default Home;
