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
        'Bearer BQCcJnL9jv3mkvAS-dzRz5zStOXgYVjau4Hy0MDs5TGGZhSiJRK55zgROghyzyBOX7rlVIj66--Dz8cvi7oWN_vESdnA2ikr8qgRgeQnhNQizzJgshJRnXic2EG16zWm6WEgDsbsW2tczM5aid3qdvazwDc-OmMa1V1hjoe5A_gJTQJeukHE5QYx6NgKOepEdao"'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}