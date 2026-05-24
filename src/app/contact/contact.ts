import { Component } from '@angular/core';
import { Email } from "./email/email";
import { Whatsapp } from "./whatsapp/whatsapp";
import { Phone } from "./phone/phone";

@Component({
  selector: 'app-contact',
  imports: [Email, Whatsapp, Phone],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact { }
