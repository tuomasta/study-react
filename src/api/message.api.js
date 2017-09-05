import Rx from 'rxjs/Rx';

class MessageApi {
    constructor() {
        //this.subject = new Rx.Subject();
    }

    getMessages(channel) {
        return Rx.Observable.of([{
            sender: 'chatbot',
            text: `Hello there, welcome to @${channel}`
        }]);
    }
}

const messageApi = new MessageApi();
export default messageApi;