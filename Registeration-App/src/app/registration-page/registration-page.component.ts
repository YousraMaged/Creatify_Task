import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-registration-page",
  templateUrl: "./registration-page.component.html",
  styleUrls: ["./registration-page.component.css"]
})
export class RegistrationPageComponent implements OnInit {
  public user = {};
  constructor() {}

  ngOnInit() {}

  submit() {
    window.localStorage.setItem('user', JSON.stringify(this.user));
  }

  uploadPhoto(event) {
    let reader = new FileReader();
    let self = this;
    reader.addEventListener("load", function() {
      self.user["photo"] = reader.result;
    });
    reader.readAsDataURL(event);
  }
}
