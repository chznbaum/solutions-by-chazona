import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Document } from './document';
import { DocumentService } from './document.service';

@Component({
  moduleId: module.id,
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  providers: [ DocumentService ]
})
export class DocumentsComponent implements OnInit {
  documents: Document[];
  errorMessage: string;
  mode = 'Observable';

  constructor(
    private documentService: DocumentService
  ) {}

  ngOnInit() {
    const timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments()
        .subscribe(
          documents => this.documents = documents,
          error => this.errorMessage = <any>error
        );
  }
}
