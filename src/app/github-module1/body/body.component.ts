import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitserviceService } from '../../gitservice.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
RepoName: string = '';
response: any;
ResponseList: Array<any>;
  constructor(private http: HttpClient, private gitservice: GitserviceService) { }

  ngOnInit() {
  }
search(repoName) {
   this.gitservice.getData(repoName).subscribe( (response) => {
    this.ResponseList = response.items;
    console.log(this.ResponseList);
  });

 // this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res=>{
   // console.log(res);
 // })


}
}
