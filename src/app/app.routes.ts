import { Routes } from '@angular/router';
import { DiaryComponent } from './components/diary/diary.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path: "about", component:AboutComponent},
    {path: "", component: DiaryComponent},
];
