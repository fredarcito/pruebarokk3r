import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent  } from './components/charts/charts.component';
import { NewsComponent  } from './components/news/news.component';
 
const APP_ROUTES: Routes=[
{ path: 'home', component: ChartsComponent },
{ path: 'news', component: NewsComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);