import { Component } from '@angular/core';

@Component({
selector: 'app-interpolacion',
templateUrl: './interpolacion.component.html',
styleUrls: ['./interpolacion.component.css']
})

export class InterpolacionComponent {
mensaje: string = '¡Esto es un ejemplo de interpolación en Angular!';
}