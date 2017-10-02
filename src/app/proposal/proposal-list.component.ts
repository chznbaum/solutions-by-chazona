import { Component } from '@angular/core'
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15,'ABC Company', 'https://sampleportfolio.com', 'ABC Technology', 150, 120, 15, 'abccompany@example.com')
  proposalTwo: Proposal = new Proposal(20,'XYZ Company', 'https://sampleportfolio.com', 'ABC Technology', 150, 120, 15, 'xyzcompany@example.com')
  proposalThree: Proposal = new Proposal(35,'Sample Company', 'https://sampleportfolio.com', 'ABC Technology', 150, 120, 15, 'samplecompany@example.com')
  proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree]
}
