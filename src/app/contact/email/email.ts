import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email',
  imports: [FormsModule],
  templateUrl: './email.html',
  styleUrl: './email.scss',
})
export class Email {
  subject = '';
  message = '';

  onSubmit(event: Event) {
    event.preventDefault();
    const subjectEncoded = encodeURIComponent(this.subject);
    const bodyEncoded = encodeURIComponent(this.message);
    window.location.href = `mailto:info@babiecasmart.es?subject=${subjectEncoded}&body=${bodyEncoded}`;
  }
}

