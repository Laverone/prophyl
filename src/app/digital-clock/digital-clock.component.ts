import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {
  uk:string ="assets/img/uk.png";
  sp:string ="assets/img/sp.png";
  it:string ="assets/img/it.png";
  fr:string ="assets/img/fr.png";

  private daysArray = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

  private date = new Date();

  public hourUK!: string;
  public hour!: string;
  public minute!: string;
  public second!: string;
  public day!: string;
  

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    }, 1000)

    this.day = this.daysArray[this.date.getDay()];
  }

  private updateDate(date: Date) {
    const hours = date.getHours();
    const hoursUK = date.getHours()-1;
    
    this.hour = hours < 10 ? '0' + hours : hours.toString();
    this.hourUK = hoursUK < 10 ? '0' + hours : hoursUK.toString();
    

    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();

    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();
  }
  

}
