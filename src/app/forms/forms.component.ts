import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

    public listComidas: Array<{comida: string, preco: string}> = [
        {comida: 'x-salada', preco: 'R$ 10,00'},
        {comida: 'x-bacon', preco: 'R$ 11,00'},
        {comida: 'x-sunto', preco: 'R$ 12,00'}
    ]

    constructor() {

    }

    ngOnInit(): void {
        
    }

    public submitForm(form: NgForm) {
        console.log(form.value)
    }

}
