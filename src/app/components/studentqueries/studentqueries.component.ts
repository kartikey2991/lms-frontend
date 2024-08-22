import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { Query } from '../../models/query.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-studentqueries',
  templateUrl: './studentqueries.component.html',
  styleUrl: './studentqueries.component.css'
})
export class StudentQueriesComponent implements OnInit{
  // queries: Query[] = [];

  //   constructor(private queryService: QueryService) {}

  //   ngOnInit(): void {
  //       // this.queryService.getQueries().subscribe((data: Query[]) => {
  //       //   console.log('Fetched queries:', data); // Debugging line to check the fetched data
  //       //   this.queries = data;
  //       //   //console.log('Filtered queries:', this.queries); // Debugging line to check the filtered data
  //       // });
  //     }
  queryId: number | null = null;
  queryDetails: any;

  constructor(private route: ActivatedRoute, private queryService: QueryService) { }

  ngOnInit(): void {
    // Retrieve the query ID from the route parameters
    // this.queryId = this.route.snapshot.paramMap.get('id');

    this.queryId = Number(this.route.snapshot.paramMap.get('id'));


    if (this.queryId) {
      // Fetch the query details from the service
      this.queryService.getQueryById(this.queryId).subscribe(
        {next: (data: any) => {
          this.queryDetails = data;
        },
        error: (error) => {
          console.error('Error fetching query details:', error);
        }
    });
    }
  }
}
