import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = "053e4f137946b59bf6fb";
  private clientsecret = "68cec4984fc7163541c43cd828af13c020e786fb";

  constructor(private http: HttpClient) {
    console.log("service is now ready!");
    this.username = "johnopana";
  }
  getprofileInfo() {
    return this.http.get(
      "https://api.github.com/users/" +
        this.username +
        "?client_id=" +
        this.clientid +
        "&client_secret=" +
        this.clientsecret
    );
  }
  getProfileRepos() {
    return this.http.get(
      "https://api.github.com/users/" +
        this.username +
        "/repos?client_id=" +
        this.clientid +
        "&client_secret=" +
        this.clientsecret
    );
  }
  updateusername(username: string) {
    this.username = username;
  }
  updateProfile(username: string) {
    this.username = username;
  }
}
