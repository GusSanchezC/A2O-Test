import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './inputs.component.html'
})
export class InputsComponent {
  @Input({required: true}) id!: string
  @Output() sendDataEvent = new EventEmitter<any>();
    submitData(data: any){
      if(!data.value.trim()){
        alert('Error, empty input.')
        return
      }
      let formattedData = {}
      if(this.id == "input_1"){
        const lines = data.value.trim().split('\n')
        if(lines < 2){
          alert("Missing data, be sure to enter n, k, rq and cq.")
        }
        const [n,k] = lines[0].split(' ').map(Number)
        const [rq,cq] = lines[1].split(' ').map(Number)
        if(n < 0 || n > 100000 || k <= 0 || k > 100000){
          alert('Invalid input, please change the values.')
          return
        }
        const obstacles = lines.slice(2).map((line: string) => line.split(' ').map(Number))
        if(obstacles.some((obstacle:any) => obstacle[0] === rq && obstacle[1] === cq)){
          alert(`An obstacle can't be in the same position as the queen (${rq},${cq}).`)
          return
        }
        formattedData = {
          "n": n,
          "k":k,
          "rq":rq,
          "cq":cq,
          "obstacles": obstacles
        }
      }else if(this.id == "input_2"){
        formattedData = {
          "data": data.value
        }
      }
      
      this.sendDataEvent.emit(formattedData)
      
    }
}
