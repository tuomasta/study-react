import Rx from 'rxjs/Rx';

class MessageApi {
  constructor() {
    this.subject = null;
  }

  getMessages(channel) {
    // TODO: using poll here
    // should be changed to SSE or signalR
    // also not quite sure about the idea starting to poll
    // with get messages. Maybe refactor to two separate api call

    const pollInterval = 1000;
    let startIndex = 0;
    const pollMessages = Rx.Observable
      .interval(pollInterval)
      .flatMap(() => this.fetchMessages(channel, startIndex));

    return this.fetchMessages(channel, startIndex)
      .merge(pollMessages)
      .do(messages => startIndex += messages.length)
      // eslint-disable-next-line no-console
      .finally(() => console.log('Unsubscribed the message polling!'));
  }

  createMessage(channel, user, message) {
    return Rx.Observable.ajax({
      url: this.getUrl(channel),
      method: 'POST',
      body: {
        sender: user,
        text: message
      }
    });
  }

  fetchMessages(channel, fromIndex) {
    let uri = this.getUrl(channel);
    if (fromIndex) uri += `?fromIndex=${fromIndex}`;
    return Rx.Observable.ajax(uri).map(r => r.response);
  }

  getUrl(channel) {
    return `http://localhost:4200/api/v1/channel/${channel}/messages`;
  }
}

const messageApi = new MessageApi();
export default messageApi;