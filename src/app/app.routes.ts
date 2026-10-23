import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';
import { Page01 } from './pages/page01/page01';
import { Page02 } from './pages/page02/page02';
import { JuegoDadosComponent } from './pages/juego-dados/juego-dados';
import { Agenda } from './padreHijos/agenda/agenda';

export const routes: Routes = [
    {
        path: "home",
        component: Home
    },
    { // Path vacío = página predeterminada
        path: "",
        component: Home
    },
    {
        path: "page01",
        component: Page01
    },
    {
        path: "page02",
        component: Page02
    },
    { // Carga diferida
        path: "page01B",
        loadComponent: () => import("./pages/page01/page01").then(m => m.Page01)
    },
    {
        path: "dados",
        component: JuegoDadosComponent
    },
    {
        path: "agenda",
        component: Agenda
    },
    {
        path: "agenda2",
        loadComponent: () => import("./padreHijos/agenda/agenda").then(m => m.Agenda)
    },
    {
        path: "formulario",
        loadComponent: () => import("./pages/formularios/formularios").then(m => m.Formularios)
    }
];
