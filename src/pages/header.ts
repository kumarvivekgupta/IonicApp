import {Component, OnInit} from "@angular/core";

@Component({
  selector: `app-header`,
  template: `
    <div fxLayoutAlign="center center" fxLayout="row" style="margin-left: 30%;padding: 20px">
      <img src="../assets/icon/favicon.ico"/>
      <h1 (click)="home()">Home</h1>
      <h1 (click)="video()">Video</h1>
      <h1 (click)="pics()">Pics</h1>
      <h1 (click)="about()">About</h1>
    </div>
  `,
  styles: []
})
export class AppHeader implements OnInit{
  ngOnInit(){
  }
  home(){
  }
  video(){
  }
  pics(){
  }
  about(){
  }
}
