import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {
  documents: Document[] = [
    {
      title: 'My First Document',
      description: 'The first sample document used by the front end.',
      file_url: 'https://google.com',
      updated_at: '09/30/2017',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/ContractLaw.jpg',
      image_alt: 'pen atop contract papers',
      client_id: '1'
    },
    {
      title: 'My Second Document',
      description: 'The second sample document used by the front end.',
      file_url: 'https://google.com',
      updated_at: '10/01/2017',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
      image_alt: 'freelancer at desk, working in web browser',
      client_id: '1'
    },
    {
      title: 'My Third Document',
      description: 'The third sample document used by the front end.',
      file_url: 'https://google.com',
      updated_at: '10/02/2017',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Wikimedia_Conference_Berlin_2010_-_Developer_meeting_%287957%29.jpg',
      image_alt: 'two developers work on project planning',
      client_id: '1'
    }
  ]
}
