import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Authservice {

  islogged=signal(false);
}
