import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-registration-page",
  templateUrl: "./registration-page.component.html",
  styleUrls: ["./registration-page.component.css"]
})
export class RegistrationPageComponent implements OnInit {
  public user = {};
  isLoading = false;
  constructor(private router: Router) {}

  ngOnInit() {}

  submit() {
    window.localStorage.setItem('user', JSON.stringify(this.user));
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/home']);
  }, 3000);
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
