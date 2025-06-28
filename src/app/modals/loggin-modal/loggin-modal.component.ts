import {Component, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-loggin-modal',
  templateUrl: './loggin-modal.component.html',
  styleUrls: ['./loggin-modal.component.scss']
})
export class LogginModalComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

}
