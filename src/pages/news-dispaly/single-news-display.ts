import {Component} from "@angular/core";

@Component({
  selector: `single-news-page`,
  template: `
    <div ion-col>
      <ion-card>
        <ion-card ion-row fxLayoutAlign="start center">
          <h1>News</h1>
          <h2>Time</h2>
        </ion-card>
        <div>
          <p>Description</p>
        </div>
      </ion-card>

    </div>
  `,
  styles: []
})
export class SingleNewsDisplay {

}
