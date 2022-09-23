import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDnYxOaYF7yY-xKMBJxgGow3Qma_FkFSLDjPgAqCsJGFn4NxHB7NhB37FUEvyUS4h9tKT9hRt6jLjXtDmwL-RqONreBUWGDjwQRLDrMOw0RvD5I_QB1nDRcYFRY9KvXBHt6ZORCNiA7zVM4-otamhKCyH6wHFREGlGQmL0lC4lCG99-k9ep0NXfhH8xckwuVLE"'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}