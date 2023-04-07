import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import userData from '../data/mock-user-data.json'

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className={'flex flex-col flex-wrap'}>
          { userData.map((user, index) =>
            <a href={`/profile/${index}`} className={'flex max-w-[300px] items-center m-4 border border-white p-2 rounded-xl hover:border-gray-500'} key={user.id.$oid}>
              <div className={'mx-4'}>
                <img className={'rounded-full'} width={50} height={50} src={user.avatar} alt={user.first_name}/>
              </div>
              <div>{user.first_name} {user.last_name}</div>
            </a>
          ) }
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
