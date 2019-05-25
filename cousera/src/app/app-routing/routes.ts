import {Routes} from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { DishdetailsComponent } from '../dishdetails/dishdetails.component'
import { AboutComponent } from '../about/about.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HomeComponent } from '../home/home.component';
 
export const routes : Routes = [
    {path : 'home', component:HomeComponent},
    {path : 'menu', component:HomeComponent},
    {path : '', redirectTo : '/home' , pathMatch : 'full' },
  
]   