import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  documents: Document[] = [
    {
      title: 'My First Document',
      description: 'The first sample document used by the front end.',
      file_url: 'https://google.com',
      updated_at: '09/30/2017',
      image_url: 'https://google.com',
      client_id: '1'
    },
    {
      title: 'My Second Document',
      description: 'The second sample document used by the front end.',
      file_url: 'https://google.com',
      updated_at: '10/01/2017',
      image_url: 'https://google.com',
      client_id: '1'
    },
    {
      title: 'My Third Document',
      description: 'The third sample document used by the front end.',
      file_url: 'https://google.com',
      updated_at: '10/02/2017',
      image_url: 'https://google.com',
      client_id: '1'
    }
  ]
}
