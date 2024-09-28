import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { OutputsComponent } from '../../components/outputs/outputs.component';
import { InputsComponent } from '../../components/inputs/inputs.component';
import { ApiService } from '../../api.service';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-problem2',
  standalone: true,
  imports: [NavbarComponent,OutputsComponent,InputsComponent,FooterComponent],
  templateUrl: './problem2.component.html'
})
export default class Problem2Component {
  result: any
  constructor(private apiService:ApiService){}
  handleData(data: any){
    this.apiService.sendData(data,'problem2').subscribe(
      response => {
        this.result = response
      },
      error => {
        console.log('Error',error)
        alert('Error, send data failed')
      }
    )
  }
}
