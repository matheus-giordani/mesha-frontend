import { CommonService } from '../common.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Conhecimento } from './conhecimento.interface';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { User } from '../list-register/user.interface';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit {
  listaConhecimentos: Conhecimento[] = [
    { name: 'Git', code: 1 },
    { name: 'React', code: 2 },
    { name: 'PHP', code: 3 },
    { name: 'NodeJS', code: 4 },
    { name: 'DevOps', code: 5 },
    { name: 'Banco de Dados', code: 6 },
    { name: 'TypeScript', code: 7 },
  ];
  formRegister!: FormGroup;
  queryParams!: string | null;
  stateOptions: any[] = [
    { label: 'Não validado', value: 'Não validado' },
    { label: 'Validado', value: 'Validado' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.formRegister = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: [
        null,
        [Validators.required, Validators.email, Validators.maxLength(100)],
      ],
      cpf: [
        '',
        [
          Validators.required,
          Validators.pattern(/(\d{3})(\d{3})(\d{3})(\d{2})/),
        ],
      ],
      celular: ['', [Validators.required]],
      conhecimentos: [null, [Validators.required]],
      validacao: [null],
    });
  }

  async ngOnInit() {
    this.formRegister.addAsyncValidators;
    this.queryParams = await this.getQueryParam();
    if (this.queryParams) {
      this.commonService.getUser(this.queryParams).subscribe({
        next: (res) => {
          this.formRegister.patchValue(res);
        },
      });
    }
  }

  async getQueryParam(): Promise<string | null> {
    const query = await firstValueFrom(this.route.queryParams);
    return query['id'] || null;
  }

  submit() {
    if (this.formRegister.invalid) {
      Object.keys(this.formRegister.controls).forEach((field) => {
        const control = this.formRegister.get(field);
        if (control?.errors) {
          this.toastr.error(`Erro no campo ${field}`);
        }
      });
      return;
    }

    if (!this.queryParams) {
      this.commonService.getAll().subscribe((res) => {
        const result = res.find((value) => {
          return value.cpf === this.formRegister.value['cpf'];
        });
        if (!result) {
          this.enviarFormulario();
        } else {
          this.toastr.error('CPF já cadastrado');
        }
      });
    }

    this.enviarFormulario()
  }

  enviarFormulario(): void {
    const observable$ = this.queryParams
      ? this.commonService.update(this.queryParams, this.formRegister.value)
      : this.commonService.postDataUser(this.formRegister.value);

    observable$.subscribe({
      next: (res) => {
        this.toastr.success('Formulário enviado com sucesso');
        this.formRegister.reset();
      },
      error: (error) => {
        this.toastr.error(
          'Erro no envio do formulário',
          'Tente novamente mais tarde!'
        );
      },
    });
  }
}
