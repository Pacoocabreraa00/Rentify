import { Component, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';

interface Message {
  text: string;
  username: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  newMessage: string = '';
  socket!: Socket;

  constructor() {
    this.socket = {} as Socket;
  }

  ngOnInit(): void {
    this.socket = io({
      auth: {
        username: this.getUsername(),
        serverOffset: 0
      }
    });

    this.socket.on('chat message', (msg: string, serverOffset: number, username: string) => {
      const newMsg: Message = {
        text: msg,
        username: username
      };
      this.messages.push(newMsg);
      (this.socket as any).auth.serverOffset = serverOffset;
      // scroll to bottom of messages
      setTimeout(() => {
        const messagesElement = document.getElementById('messages');
        if (messagesElement) {
          messagesElement.scrollTop = messagesElement.scrollHeight;
        }
      });
    });
  }

  sendMessage(): void {
    if (this.newMessage.trim() !== '') {
      this.socket.emit('chat message', this.newMessage.trim());
      this.newMessage = '';
    }
  }

  getUsername(): string {
    const username = localStorage.getItem('username');
    if (username) {
      console.log(`User existed ${username}`);
      return username;
    } else {
      this.fetchRandomUsername();
      return '';
    }
  }

  async fetchRandomUsername(): Promise<void> {
    const res = await fetch('https://random-data-api.com/api/users/random_user');
    const { username: randomUsername } = await res.json();
    localStorage.setItem('username', randomUsername);
    console.log(`New username set: ${randomUsername}`);
  }
}
