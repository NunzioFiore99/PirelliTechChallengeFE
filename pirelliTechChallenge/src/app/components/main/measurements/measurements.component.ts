import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { IMeasurement } from 'src/app/dto/measurement';
import { MeasurementService } from 'src/app/service/measurement.service';

@Component({
  selector: 'measurements-component',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {

  listOfData: IMeasurement[] = [];

  @Input() auto: string = "";
  constructor(private measurementService: MeasurementService) { }

  ngOnInit(): void {
    //fai partire la chiamata verso il backend che recupera per quella determinata auto la lista delle ,misurazioni
    this.retrieveDataFromBe();
    setInterval(() => {this.retrieveDataFromBe()}, 5000);
  }

  retrieveDataFromBe() {
    this.measurementService.getMeasurementByAuto(this.auto).subscribe((result: IMeasurement[]) => {
      this.listOfData = result;
    });
  }


}
