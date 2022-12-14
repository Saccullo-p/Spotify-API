import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  //Osserva gli eventi sulla route albums, restituisce la ParamMap che contiene tutti i   
  //parametri passati all’url
  routeObs!: Observable<ParamMap>; 

  album : any; //Qui salverò l'album selezionato
  spotifyServiceObs!: Observable<Object>;
  
  //Usiamo la dependency injection per farci mandare i moduli del routing e dello    
  //SpotifyService
  constructor(
    private route: ActivatedRoute,
    private service: SpotifyService,
    private location: Location ) { }


  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route albums/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let albumId = params.get('id'); //Ottengo l'id dai parametri
    console.log (albumId); //Stampo su console
    //spotifyServiceObs va dichiarato
    this.spotifyServiceObs = this.service.getAlbum(albumId!) ;
    this.spotifyServiceObs.subscribe((data)=>this.album = data)
  }

  back() : void
  {
    this.location.back();
  }
}
