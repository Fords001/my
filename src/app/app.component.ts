import { Component } from '@angular/core';
import info from './files/info.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my';
  infoList:{id:Number , oldPrice:any, price:any , title:String , seen:Boolean , locality:String , date:Number}=info;
   
   
}
