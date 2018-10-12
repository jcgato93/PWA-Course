import { Injectable } from '@angular/core';
import { AngularFireAuth } from'angularfire2/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private angularFireAuth: AngularFireAuth,
    private router: Router) {
      this.isLogged();
     }

  /**
   * Register the new user to app
   * @param email 
   * @param password 
   */
  public register(email,password) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
      .then((response)=>{
        alert('Sign In Sueccess');
        console.log(response);
        this.router.navigate(['/notes']);        
      })
      .catch((error)=>{
        alert('Error!')
        console.log(error);
      })
  }


  /**
   * Login
   * @param email 
   * @param password 
   */
  public login(email: any, password: any) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        alert('Success!');
        console.log(response);
        this.router.navigate(['/notes']);
      })
      .catch((error) => {
        alert('Error!')
        console.log(error);
      })
  }

  /**
   * isLogged
   * check if the user is authenticated
   */
  public isLogged() {
    return this.angularFireAuth.authState;    
  }


  /**
   * logout
   */
  public logout() {
    this.angularFireAuth.auth.signOut();
    alert('Session closed');
    this.router.navigate(['login'])
  }




}
