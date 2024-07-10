import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfleComponent } from './user-profle/user-profle.component';

export const routes: Routes = [
    { path: 'signup', component: SignUpComponent },
    { path: 'user', component: UserProfleComponent },
    { path: '', redirectTo: '/user', pathMatch: 'full' }
];

export default routes;