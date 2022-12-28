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
  IonTabs,
  IonTabBar,
  IonBadge,
  IonLabel,
  IonTabButton,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { Redirect, Route } from "react-router-dom";
import { personCircle, calendar, person, card, cash, map, informationCircle } from "ionicons/icons";
import "./Home.css";
import Menu from "../components/Menu";
import Profile from "./Profile";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <Menu />
      <IonContent>
        <IonCard className="card">
          <IonContent className="card-content">
            <IonLabel className="" position="floating">
              Enter Name
            </IonLabel>
            <IonInput placeholder="Enter name" />
          </IonContent>
        </IonCard>
      </IonContent>
    </>
  );
};

export default Home;
