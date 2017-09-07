import Rx from 'rxjs/Rx';

class MessageApi {
  constructor() {
    this.subject = null;
  }

  getMessages(channel) {
    this.subject = new Rx.BehaviorSubject([{
      sender: 'chatbot',
      text: `Hello there, welcome to @${channel}`
    }]);

    return this.subject;
  }

  createMessage(channel, user, message) {
    this.subject.next([{
      sender: user,
      text: message
    }]);
    return Rx.Observable.of(1);
  }
}

const messageApi = new MessageApi();
export default messageApi;