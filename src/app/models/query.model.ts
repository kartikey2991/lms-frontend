export class Query{
    queryId: number;
    description: string;
    response: string;
    joinerId: number;
    mentorId: number;
  
    constructor(
      queryId: number,
      description: string,
      response: string,
      joinerId: number,
      mentorId: number,
    ) {
      this.queryId = queryId;
      this.description = description;
      this.response = response;
      this.joinerId = joinerId;
      this.mentorId = mentorId;
    }
  }