import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, of } from "rxjs";
import { mockProfile } from "./mockdata";
import { Profile } from "../_models/profile";

@Injectable()
export class ProfileService {
  public readonly apiUrl = environment.adminApiUrl;
  public readonly baseUrl = environment.baseUrl;
  public module: string = "dummies";

  constructor(public http: HttpClient) {}

  getProfileInfo(): Observable<Profile> {
    return of(mockProfile)
  }

  updateProfileInfo(data: Profile): Observable<unknown> {
    return of(true);
  }

  create() {
    return this.http.get(this.apiUrl + "/" + this.module + "/create");
  }

  store(obj) {
    return this.http.post(this.apiUrl + "/" + this.module + "", obj);
  }

  edit(id) {
    return this.http.get(this.apiUrl + "/" + this.module + "/" + id + "/edit");
  }

  show(id) {
    return this.http.get(this.apiUrl + "/" + this.module + "/" + id);
  }

  update(id, obj) {
    return this.http.patch(this.apiUrl + "/" + this.module + "/" + id, obj);
  }
}
