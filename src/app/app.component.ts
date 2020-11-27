import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
title = 'assignment1';
hide=true;
huh:any;
given='123456789';
constructor()
{
let vis=this.given.slice(-4),
countnum='';
for(var i=(this.given.length)-4;i>0;i--)
{
countnum+='*';
}
this.huh=countnum+vis;
}
om()
{
  this.hide =!this.hide;
}
}
