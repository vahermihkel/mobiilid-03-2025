import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import { useEffect, useState } from 'react';
// import React from 'react'; // võtan terve
// import { useState } from 'react'; // võtan tüki

const Page: React.FC = () => {

  // kõiki tooteid mis sul ---> andmebaas. ---> localstorage ei sobi

  // ostukorvi ---> localStorage ----> andmebaas ei sobi

  

  const { name } = useParams<{ name: string; }>();
  // const [test, setTest] = useState("");

  // KODUS
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [loomad, setLoomad] = useState<any[]>([]);
  const url = "https://mobiilid-mihkel-default-rtdb.europe-west1.firebasedatabase.app/loomad.json";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setLoomad(json || []));
  }, []);

  // onClickiga käima
  const uueLisamine = () => {
    //loomad.push(......);

    fetch(url, {
      "method": "PUT",              // mida teen - panen
      "body": JSON.stringify(loomad) // mille panen - "loomad" muutuja sisu
    })
      .then(res => res.json())
      .then(json => setLoomad(json || []));
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
