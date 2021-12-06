import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PredictService } from 'src/services/predict.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pred_service: PredictService, private http: HttpClient) { }
  user:String;
  sepaLength;
  sepaWidth;
  petaLength;
  petaWidth;
  vals: object;
  predictedVal;
  isPredicted = false;
  doDisplay;
  predict(){
    this.vals = {
      "sepaLength":this.sepaLength,
      "sepaWidth":this.sepaWidth,
      "petaLength":this.petaLength,
      "petaWidth":this.petaWidth
    }
    return this.pred_service.predict(this.vals).subscribe((res) => {
      this.predictedVal = "The predicted flower is " + res;
      this.isPredicted = true;
    })

  }
  reset_card(){
    this.isPredicted = false
  }
  ngOnInit(): void {
    this.user = this.route.snapshot.paramMap.get('user')
  }
  ngDoCheck(){
    this.doDisplay =this.isPredicted;
  }
  ngOnChange(){
   this.doDisplay = this.isPredicted;
  }
  

}
