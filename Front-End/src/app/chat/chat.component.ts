import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';

interface Mensaje {
  text: string;
  username: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [NgFor],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mensajes: Mensaje[] = [];
  nuevoMensaje: string = '';
  socket!: Socket;

  constructor() {
    this.socket = {} as Socket;
  }

  ngOnInit(): void {
    this.socket = io({
      auth: {
        username: this.obtenerNombreUsuario(),
        serverOffset: 0
      }
    });

    this.socket.on('chat message', (msg: string, serverOffset: number, username: string) => {
      const nuevoMensaje: Mensaje = {
        text: msg,
        username: username
      };
      this.mensajes.push(nuevoMensaje);
      (this.socket as any).auth.serverOffset = serverOffset;
      setTimeout(() => {
        const mensajesElement = document.getElementById('messages');
        if (mensajesElement) {
          mensajesElement.scrollTop = mensajesElement.scrollHeight;
        }
      });
    });
  }

  sendMessage(): void {
    if (this.nuevoMensaje.trim() !== '') {
      this.socket.emit('chat message', this.nuevoMensaje.trim());
      this.nuevoMensaje = '';
    }
  }

  obtenerNombreUsuario(): string {
    const nombreUsuario = localStorage.getItem('username');
    if (nombreUsuario) {
      console.log(`Usuario existente ${nombreUsuario}`);
      return nombreUsuario;
    } else {
      this.fetchRandomUsername();
      return '';
    }
  }

  async fetchRandomUsername(): Promise<void> {
    try {
      const res = await fetch('https://random-data-api.com/api/users/random_user');
      const { username: nombreUsuarioAleatorio } = await res.json();
      localStorage.setItem('username', nombreUsuarioAleatorio);
      console.log(`Nuevo nombre de usuario establecido: ${nombreUsuarioAleatorio}`);
    } catch (error) {
      console.error('Error al obtener el nombre de usuario:', error);
  }
}}