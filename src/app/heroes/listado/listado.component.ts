import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroes: string[] = ['Superman', 'Batman', 'Flash', 'Wonder Woman', 'Detective Marciano', 'Shazam', "Green Arrow", "Linterna Verde", "Cyborg", "SuperGirl"]
    heroeBorrado: string = '';
    borrado = false; 

    borrarHeroe() {
      this.heroeBorrado = this.heroes.shift() || '';
      this.borrado = true;
    }

    anadirHeroe(): void  {
      const heroeAnadido = this.heroes = ['Superman', 'Batman', 'Flash', 'Wonder Woman', 'Detective Marciano', 'Shazam', "Green Arrow", "Linterna Verde", "Cyborg", "SuperGirl"]
      this.borrado = false;
      console.log(heroeAnadido);
    }

}
