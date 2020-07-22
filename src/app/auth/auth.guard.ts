import { CanActivate, RouterStateSnapshot ,
  ActivatedRouteSnapshot,
  Router,
   } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
@Injectable()
export class Authguard implements CanActivate {

 constructor( private authservice: AuthService, private router: Router) {}
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean> | Promise<boolean> {
   const isauth = this.authservice.getisauth();
   console.log('auth guard', isauth);
   if (!isauth) {
     this.router.navigate(['/']);
     return false;
   }
   return true;
 }


}
