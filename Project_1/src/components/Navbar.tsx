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
  useIonRouter,
} from "@ionic/react";
import { personCircle, calendar, person, card, cash, map, informationCircle } from "ionicons/icons";
import { Route } from "react-router";

const Navbar: React.FC = () => {
  const history = useIonRouter();
  const push = () => {
    history.push("/profile");
  };
  return (
    <>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home" />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="schedule">
            <IonIcon icon={calendar} />
            <IonLabel>Schedule</IonLabel>
            <IonBadge>6</IonBadge>
          </IonTabButton>

          <IonTabButton tab="speakers">
            <IonIcon icon={personCircle} />
            <IonLabel>Speakers</IonLabel>
          </IonTabButton>

          <IonTabButton tab="map">
            <IonIcon icon={map} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>

          <IonTabButton tab="about">
            <IonIcon icon={informationCircle} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </>
  );
};

export default Navbar;
