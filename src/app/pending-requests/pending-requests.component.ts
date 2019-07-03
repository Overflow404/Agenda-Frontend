import { Component, OnInit } from '@angular/core';
import {PendingService} from '../service/PendingService';
import {ToolbarService} from '../service/ToolbarService';
import {MatListOption, MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {

  private mails: string[];

  constructor(private pendingService: PendingService,
              private toolbarService: ToolbarService,
              private snackBar: MatSnackBar,
              private router: Router) {
    this.mails = [];
    this.load();
  }

  ngOnInit() {
    this.toolbarService.hide();
  }

  private load() {
    const user = localStorage.getItem('user');
    const mail = JSON.parse(user).email;
    this.pendingService.pending(mail).subscribe(
      (res) => this.onViewResult(res),
      error => this.OnViewError(error));
  }

  private onViewResult(mails) {
    for (const mail of mails) {
      this.mails.push(mail);
    }
  }

  private OnViewError(error: any) {
    this.toolbarService.show();
    this.router.navigateByUrl('/login');
  }

  accept(mail: string) {
    this.pendingService.accept(mail).subscribe(
      () => this.onViewAcceptedResult(mail),
      error => this.OnViewError(error));
  }

  private onViewAcceptedResult(toRemove: string) {
    const i = this.mails.indexOf(toRemove);
    this.mails.splice(i, 1);
    this.snackBar.open('Request accepted!', 'X');
  }

  back() {
    this.router.navigateByUrl('/calendar');
  }
}
