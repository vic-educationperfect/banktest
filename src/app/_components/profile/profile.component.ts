import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Profile, ViewMode } from "../../_models/profile";
import { ProfileService } from "../../_services";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  public mode: ViewMode = ViewMode.View;
  public ViewMode = ViewMode;
  public profile;
  profileForm: FormGroup

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private router: Router
  ) {
    if (
      this.route.snapshot.url[0] &&
      this.route.snapshot.url[0].path === ViewMode.Edit
    ) {
      this.mode = ViewMode.Edit;
    }
  }

  ngOnInit() {
    this.profileService.getProfileInfo().subscribe((profile: Profile) => {
      this.profile = profile;

      if (this.mode === ViewMode.Edit) {
        this.profileForm = new FormGroup({
          primaryEmail: new FormControl(profile.primaryEmail, Validators.required),
          secondaryEmail: new FormControl(profile.secondaryEmail, Validators.required),
          mobilePhone: new FormControl(profile.mobilePhone, Validators.required),
          officePhone: new FormControl(profile.officePhone, Validators.required),
          address: new FormControl(profile.address, Validators.required),
        });
      }
    });
  }

  updateProfile() {
    this.router.navigate(['/profile/edit']);
  }

  onSubmit() {
    this.profileService.updateProfileInfo(this.profileForm.value).subscribe(_ => {
      this.router.navigate(['/profile']);
    })
  }
}
