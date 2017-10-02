export class Proposal {
  constructor(
    public id?: number,
    public client?: string,
    public portfolio_url: string = 'http://',
    public tools?: string,
    public estimated_hours?: number,
    public hourly_rate?: number,
    public weeks_to_complete?: number,
    public client_email?: string
  ) {}
}

// 15,'ABC Company', 'https://sampleportfolio.com', 'ABC Technology', 150, 120, 15, 'client@example.com'
