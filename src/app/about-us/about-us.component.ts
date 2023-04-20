import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  text1:boolean = false;
  text2:boolean = false;
  text3:boolean = false;
  text4:boolean = false;

  onText1(){
    this.text1 = true;
  }
  onText2(){
    this.text2 = true;
  }
  onText3(){
    this.text3 = true;
  }
  onText4(){
    this.text4 = true;
  }
  onText5(){
    this.text1 = false;
  }
  onText6(){
    this.text2 = false;
  }
  onText7(){
    this.text3 = false;
  }
  onText8(){
    this.text4 = false;
  }

}
