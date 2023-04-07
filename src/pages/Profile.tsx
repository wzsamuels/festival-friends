import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import userData from '../data/mock-user-data.json'
import { RouteComponentProps } from "react-router"

interface ProfilePageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const ProfilePage: React.FC<ProfilePageProps> = ({match}) => {
  const id = Number(match.params.id);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className={'p-4 flex flex-col sm:flex-row'}>
          <img width={200} height={200} src={userData[id]?.avatar} alt={userData[id]?.first_name}/>
          <div className={'p-4'}>
            <div className={'text-xl my-4'}>{userData[id]?.first_name} {userData[id]?.last_name}</div>
            <div className={'text-lg my-2'}>Email: {userData[id]?.email}</div>
            <div className={'text-lg my-2'}>Gender: {userData[id]?.gender}</div>
            <div className={'text-lg my-2'}>Location: {userData[id]?.city}</div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default ProfilePage