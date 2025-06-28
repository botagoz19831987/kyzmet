import {Injectable} from '@angular/core';
import {telegramConfig} from '../../../assets/telegram.config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TelegramApiService {
  public config = telegramConfig;
  API = `https://api.telegram.org`;

  constructor( private http: HttpClient ) {}

  sendMessage(msg: any): any {
    const token = this.config.token;
    const chatID = this.config.chatID;
    let message = '';
    if (msg && msg.name) { message += `<b>Имя:</b> ${msg.name} %0A`; }
    if (msg && msg.email) { message += `<b>Email:</b> ${msg.email} %0A`; }
    if (msg && msg.phone) { message += `<b>Номер телефона:</b> ${msg.phone} %0A`; }
    if (msg && msg.productID) { message += `<b>ID продукта:</b> ${msg.productID}`; }
    return this.http.post<any>(`${this.API}/bot${token}/sendMessage?chat_id=${chatID}&parse_mode=html&text=${message}`, 'r');
  }

  book(msg: any): any {
    const token = this.config.token;
    const chatID = this.config.chatID;
    let message = `<b>Заявка на покупку книги: %0A</b>`;
    if (msg && msg.name) { message += `<b>Имя:</b> ${msg.name} %0A`; }
    if (msg && msg.email) { message += `<b>Email:</b> ${msg.email} %0A`; }
    if (msg && msg.phone) { message += `<b>Номер телефона:</b> ${msg.phone} %0A`; }
    return this.http.post<any>(`${this.API}/bot${token}/sendMessage?chat_id=${chatID}&parse_mode=html&text=${message}`, 'r');
  }


}
