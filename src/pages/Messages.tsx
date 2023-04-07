import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import userData from '../data/mock-user-data.json'

const conversation = {
  person1: '642a0d84fc13ae2815c88e4e',
  person2: '642a0d84fc13ae2815c88e4f',
  messages: [
    {
      text: "Hello!",
      sender: '642a0d84fc13ae2815c88e4f'
    },
    {
      text: 'Hey, how are you doing?',
      sender: '642a0d84fc13ae2815c88e4e'
    },
    {
      text: "Great! Are you going to Amplified Fest this year?",
      sender: '642a0d84fc13ae2815c88e4f'
    },
    {
      text: "Maybe. I need to get time off from work first.",
      sender: '642a0d84fc13ae2815c88e4e'
    },
    {
      text: "Cool, let me know if you decide to go.",
      sender: '642a0d84fc13ae2815c88e4f'
    },
  ]
}

const MessagePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <h1 className={'text-3xl m-8 pt-8'}>Conversation between you and {userData[1].first_name} </h1>
          <div className={'flex flex-col w-full p-4'}>
            {
              conversation.messages.map((message, index) =>
                <div key={index} className={`my-4 p-4 text-white flex ${message.sender === userData[0].id.$oid ? 'bg-blue-800 self-start rounded-tr-xl rounded-tl-xl rounded-bl-xl' : 'bg-green-800 self-end rounded-tr-xl rounded-tl-xl rounded-br-xl'}`}>
                  <img width={50} height={50} className={'rounded-full'} src={`${message.sender === userData[0].id.$oid ? userData[0].avatar : userData[1].avatar }`} alt={''}/>
                  <div>{message.text}</div>
                </div>
              )
            }
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MessagePage;
