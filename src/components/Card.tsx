import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

function Card() {
  return (
    <IonCard>
      <img alt="Silhouette of mountains" src="https://img.freepik.com/free-vector/sunset-sunrise-ocean-nature-landscape_33099-2244.jpg?w=2000" />
      <IonCardHeader>
        <IonCardTitle>Nothing to do</IonCardTitle>
        <IonCardSubtitle></IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Your task is : do nothing.</IonCardContent>
    </IonCard>
  );
}
export default Card;