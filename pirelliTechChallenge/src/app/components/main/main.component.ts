import { Component, OnInit } from '@angular/core';
import { MeasurementService } from 'src/app/service/measurement.service';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  listOfData: string[] = [];
  constructor(private measurementService: MeasurementService) { }

  ngOnInit(): void {
    this.measurementService.getListOfAuto().subscribe(
      result => {
        this.listOfData = result;
      } 
    )
  }

}
