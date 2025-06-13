import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useRef } from "react";

const Calendar: React.FC = () => {
  const datetime = useRef<null | HTMLIonDatetimeElement>(null);

  const reset = () => {
    datetime.current?.reset();
  };
  const cancel = () => {
    datetime.current?.cancel();
  };
  const confirm = () => {
    datetime.current?.confirm();
    console.log(datetime.current?.value);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Choosing time</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Choosing time</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonDatetime ref={datetime} locale="et-ET" firstDayOfWeek={1}>
          <IonButtons slot="buttons">
            <IonButton color="danger" onClick={reset}>
              Reset
            </IonButton>
            <IonButton color="primary" onClick={cancel}>
              Never mind
            </IonButton>
            <IonButton color="primary" onClick={confirm}>
              All Set
            </IonButton>
          </IonButtons>
        </IonDatetime>
      </IonContent>
    </IonPage>
  );
};

export default Calendar;
