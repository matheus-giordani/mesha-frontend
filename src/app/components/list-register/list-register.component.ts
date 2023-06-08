import { Conhecimento } from './../form-register/conhecimento.interface';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-list-register',
  templateUrl: './list-register.component.html',
  styleUrls: ['./list-register.component.scss']
})
export class ListRegisterComponent implements OnInit {
  cols!: any[];
  users!: User[]
  Conhecimentos!: string
    constructor(private commonService: CommonService){}

  ngOnInit(): void {

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'nome', header: 'Nome' },
      { field: 'email', header: 'Email' },
      { field: 'celular', header: 'Celular' },



  ];
    this.commonService.getAll().subscribe( res => {
      this.users = res
      this.users.forEach((value) =>{ console.log(value)})
      console.log(res)

    }

      )
  }

  
}
