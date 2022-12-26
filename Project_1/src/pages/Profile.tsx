import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonIcon, IonItem } from "@ionic/react";
import { cash } from "ionicons/icons";
import Menu from "../components/Menu";

const Profile: React.FC = () => {
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
              <IonItem routerLink="/home">
                <IonIcon icon={cash} className="fineIcon" />
                Fine way
              </IonItem>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonPage>
    </>
  );
};
export default Profile;
