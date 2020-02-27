import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

  isCadastro: boolean;
  cardBackground: string;

  descricaoCartao: string;
  titularCartao: string;
  numeroCartao: string;
  bancoCartao: string;
  bandeiraCartao: string;
  tipoCartao: string;

  constructor() { }

  ngOnInit() {
    this.isCadastro = true;
    this.descricaoCartao = '';
    this.titularCartao = '';
    this.numeroCartao = '';
    this.bancoCartao = '';
    this.bandeiraCartao = '';
    this.tipoCartao = 'Credito';
  }

  alterarCorCartao(): string {
    this.cardBackground =
    this.bancoCartao === 'Itaú' ? 'bg-itau' :
      this.bancoCartao === 'Banco do Brasil' ? 'bg-banco-brasil' :
      this.bancoCartao === 'Bradesco' || this.bancoCartao === 'Santander' ? 'bg-bradesco' :
      this.bancoCartao === 'Nubank' ? 'bg-nubank' :
      this.bancoCartao === 'Caixa Econômica' ? 'bg-caixa-economica' : 'bg-secondary';

    return this.cardBackground;
  }

}
