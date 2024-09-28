import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { InputsComponent } from "../../components/inputs/inputs.component";
import { OutputsComponent } from "../../components/outputs/outputs.component";
import { ApiService } from '../../api.service';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-problem1',
  standalone: true,
  imports: [NavbarComponent, InputsComponent, OutputsComponent, FooterComponent],
  templateUrl: './problem1.component.html'
})
export default class Problem1Component {
  result: any
  constructor(private apiService:ApiService){}
  handleData(data: any){
    this.apiService.sendData(data,'problem1').subscribe(
      response => {
        this.result = response
      },
      error => {
        console.log('Error',error)
        alert('Error, data send failed')
      }
    )
  }
}
