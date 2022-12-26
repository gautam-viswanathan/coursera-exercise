import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, useIonRouter, IonItem } from "@ionic/react";
import { person, card, cash } from "ionicons/icons";
import { useHistory } from "react-router";
const Menu: React.FC = () => {
  const history = useIonRouter();
  const push = () => {
    history.push("/profile");
  };
  return (
    <IonMenu contentId="main-content" className="menu">
      <IonHeader className="menu">
        <IonToolbar>
          <IonTitle className="ion-padding">
            <IonItem routerLink="/home">
              <IonIcon icon={cash} className="fineIcon" />
              Fine Way
            </IonItem>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton className="trans-item" onClick={push}>
          <IonIcon icon={person} className="ion-padding" />
          My profile
        </IonButton>
        <IonButton className="trans-item">
          <IonIcon icon={card} className="ion-padding" />
          Track expenses
        </IonButton>
      </IonContent>
    </IonMenu>
  );
};
export default Menu;
