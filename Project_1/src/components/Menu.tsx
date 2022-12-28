import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonMenuButton,
  IonButtons,
  IonContent,
  IonButton,
  IonIcon,
  useIonRouter,
  IonItem,
  IonTab,
  IonTabButton,
  IonLabel,
  IonBadge,
  IonGrid,
  IonRow,
  IonCol,
  IonListHeader,
  IonList,
} from "@ionic/react";
import "../components/Menu.css";
import { calendar, person, card, cash, personCircle, peopleCircleOutline, trailSignSharp, settingsSharp } from "ionicons/icons";
import { useHistory } from "react-router";
const Menu: React.FC = () => {
  const history = useIonRouter();
  const push = () => {
    history.push("/profile");
  };
  return (
    <>
      {/* <IonGrid> */}
      <IonMenu contentId="main-content">
        <IonListHeader className="header">
          <IonToolbar>
            <IonTitle className="menu-label">
              <IonItem routerLink="/home">
                <IonIcon icon={trailSignSharp} />
                <IonLabel className="menu-label">Fine Way</IonLabel>
              </IonItem>
            </IonTitle>
          </IonToolbar>
        </IonListHeader>
        <IonContent className="">
          <IonList>
            <IonItem routerLink="/profile">
              <IonIcon icon={person} />
              <IonLabel className="padding-icon-menu">My profile</IonLabel>
            </IonItem>
            <IonItem routerLink="/profile">
              <IonIcon icon={card} />
              <IonLabel className="padding-icon-menu">Track expenses</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonListHeader className="header" id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonItem lines="none">
                <IonTabButton tab="schedule">
                  <IonIcon icon={settingsSharp} />
                  <IonLabel>Schedule</IonLabel>
                  <IonBadge>6</IonBadge>
                </IonTabButton>
              </IonItem>
            </IonButtons>
            <IonTitle className="menu-title">
              <IonItem lines="none">
                <IonLabel>Fine Way</IonLabel>
              </IonItem>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonListHeader>
      {/* </IonGrid> */}
    </>
  );
};
export default Menu;
