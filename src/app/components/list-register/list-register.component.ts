import { Conhecimento } from './../form-register/conhecimento.interface';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-list-register',
  templateUrl: './list-register.component.html',
  styleUrls: ['./list-register.component.scss'],
})
export class ListRegisterComponent implements OnInit {
  users!: User[];
  Conhecimentos!: string;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.getAll().subscribe((res) => {
      this.users = res;
      this.users.forEach((value) => {
        console.log(value);
      });
      console.log(res);
    });
  }

  clear(table: Table) {
    table.clear();
}
}
