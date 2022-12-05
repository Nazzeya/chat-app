import { Component } from '@angular/core';
import { IMessage } from './models/message';
import { messages as data } from './data/messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleOfApp = 'chat app';

  // messages: IMessage[] = [
  //   {
  //     user: "User",
  //     text: "Hello, this is my first message"
  //   }
  // ];

  messages: IMessage[] = data

  text: string = "";

  sendMessage() {
    this.messages.push(
      {
        user: "User",
        text: this.text,
      })

    var date = new Date();

    if(this.text == 'day') {
      this.messages.push({
        user: "Bot",
        text: String(date.getDate())
      })
    } else if (this.text == 'month') {
      this.messages.push({
        user: "Bot",
        text: String(date.getMonth())
      })
    } else if (this.text == 'year') {
      this.messages.push({
        user: "Bot",
        text: String(date.getFullYear())
      })
    } else {
      this.messages.push({
        user: "Bot",
        text: "I don't have such functionality. Try something else"
      })
    }

    console.log(this.messages)
  }

  inputText: string;
  clear () {
    this.inputText = '';
  }
}
