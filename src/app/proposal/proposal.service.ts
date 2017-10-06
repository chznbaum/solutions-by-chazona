import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Proposal } from './proposal';

@Injectable()
export class ProposalService {
  private proposalsUrl = 'http://localhost:3002/freelance_proposals';

  constructor(
    private http: Http
  ) {}

  getProposals(): Observable<Proposal[]> {
    return this.http.get(`${this.proposalsUrl}.json`)
                    .map((response: Response) => <Proposal[]>response.json())
                    .catch(this.handleError);
  }

  getProposal(id: number) {
    return this.http.get(`${this.proposalsUrl}/${id}.json`);
  }

  createProposal(proposal) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.proposalsUrl, JSON.stringify(proposal), { headers: headers })
                    .map((response: Response) => response.json());
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
