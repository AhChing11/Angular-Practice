import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
  //Angular injects the singleton MessageService into that property when it creates the MessagesComponent
  //Must be 'public' because you are going to bind to it in the template
}
