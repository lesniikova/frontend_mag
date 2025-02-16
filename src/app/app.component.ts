import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule]
})
export class AppComponent implements OnInit {
  title = 'Tabela';
  podatki: any[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://crucial-kali-backend-mag.koyeb.app/table')
      .subscribe({
        next: (data) => {
          this.podatki = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Napaka pri nalaganju podatkov:', err);
          this.loading = false;
        }
      });
  }
}
