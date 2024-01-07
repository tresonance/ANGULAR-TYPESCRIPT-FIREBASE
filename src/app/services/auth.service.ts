import { Auth, GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth';
//import 'firebase/auth';

import { Observable, of, Subscriber, BehaviorSubject, Observer } from 'rxjs';
import { map,first ,switchMap, startWith, tap, take, filter, shareReplay} from 'rxjs/operators';

import { Injectable, Inject, Component, OnInit, Input, PipeTransform, Pipe, NgModule, OnDestroy} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/compat/database'
import { RouterModule, Routes, Router } from '@angular/router';


interface Choix{
  choix1:string | null;
  choix2:string | null;
}

interface IUserCredenial2 {
    pseudo?:string | null;
    email?:string | null;

    ecole:string | null;
    ville: string | null;
    niveau: string | null;
    choix: Choix;
    classe:string | null;
    birth?:string | null;
    status?:boolean | null;
}

interface IUserCredenial {
  pseudo?:string | null;
  birth?:string | null;
}


interface UserCallback {
  (user: any): void;
}

// Définir un type pour formData
interface RegistrationFormData {
  email?: string | null;
  password?: string | null;
  // Ajoutez d'autres propriétés si nécessaire
}


interface UserMoreInfo {
  uid:string | null;
  birth:string | null;
  classe:string | null;
  email:string | null;
  pseudo:string | null;
  avatar?:string | null;
  status?:string | null;
  checked?:boolean | false;
  isIn_socket_room?:boolean | false; //SEE CAMERA COMPONENT
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 // -------------------------------------------------------------
  //
  //                   STAR AuthService
  //
  // -------------------------------------------------------------
  
  email:string = '';
  //private user: Observable<firebase.User> = null;
  //currentInfo1:User;
  //currentInfo2:User2;
  private userId:any;
  private authState:any;
  //user:Observable<firebase.User>;
  user:Observable<any> = of(null);
  //user:Observable<firebase.User>
  currentUser:IUserCredenial2|null = null;
  //isAuthenticated : boolean = false;
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  //private loginStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false')
  
  url:string = '';
  emailRedirect:boolean = false;
  //status:string=false;
  /*userState = this.afAuth.authState.pipe(
                  map(authState => {
                    if(authState === undefined || !authState)
                        return null;
                    return authState.email;
                  })
              )*/
  
  constructor( 
    private router: Router,
    private afAuth: AngularFireAuth 

  ) {
    
  }
  
  /**************************************************************************
  *GET LOGGEDIN STATUS
  *SET LOGGEDIN STATUS
  ***************************************************************************/
  getAuthState(): Observable<any> {
      return of(null)
    }
  /**************************************************************************
  *GET LOGGEDIN STATUS
  *SET LOGGEDIN STATUS
  ***************************************************************************/
  
    public get localStorageKey(): string
    {
      //return `ng-chat-users-${this.userId}`; // Appending the user id so the state is unique per user in a computer.
        return "token";
    };
    
    
    private hasToken(): boolean {
     
      return false; // Return true if token is not null, false otherwise
    }
    
  
    isLoggedIn() : Observable<boolean> {
      return this.isLoginSubject.asObservable();
    }
    /**************************************************************************
    * user Observable getter
    *
    ***************************************************************************/
    getUser(): Promise<any> {
        return Promise.reject("test-promise")
    }
  
    get currentUserID(){
        return (this.userId !== undefined && this.userId !== null) ? this.userId : null;
    }
  
  
    getUserObservable(): Observable<any>{
      return of(null);
  
    }
  
    /*getUserMoreInfo() {
  
      let userId = this.getCurrentUserId();
      if(null === userId){
        console.log("no user connection found in authservice");
        return ;
      }
  
        let path = `/users/${userId}`
        return this.db.object(path).map(res => {
            return res.json();
        })
  
        /*.subscribe(user => {
            if(user !== undefined  && user !== null){
                this.currentInfo1 = (<User1>user);
                console.log("More1-Info State: ", this.currentInfo1);
              }
             else
                this.currentInfo1 = null;
        })
  
    }*/
  
    /* getUserMoreInfo2(): void{
  
        let userId = this.getCurrentUserId();
        if(null === userId){
          console.log("no user connection found in authservice");
          return ;
        }
  
        let path = `/users/${userId}`
        return this.db.object(path).valueChanges()
        .subscribe(user => {
            if(user !== undefined  && user !== null){
            this.currentInfo2 = (<User2>user);
            console.log("More2-Info State: ", this.currentInfo2);
          } else
             this.currentInfo2 = null;
        })
  
    } */
  
  
    getCurrentUser(callback:(user: IUserCredenial | null) => void): void  {

  
    }
  
  /***************************************************************************
  * utils function: to get user status, this will help us to know if user is
  *                 still logging (routes protection , hat, ...)
  ****************************************************************************/
  
  setUserStatus(status:string): void{
    
  }
  
  
  /***********************************************************************************
  *  Register a new user . Get his email and
  *  password et send him an email verification link
  *  @param
  *  @return
  ***********************************************************************************/
  
    /*[********************************* EMAIL SENT  ****************************]*/
      async sendEmailVerificationLink(email:string, showsuccessFullyMessage:boolean){
  
      }
  
      /*[********************************* EMAIL CONFIRM  *************************]*/
      async isEmailConfirmByUser(){
          /*let db = this.db;
          let userId = this.currentUserID;
          const auth = getAuth();
            try {
                  if(this.afAuth.isSignInWithEmailLink(auth, window.location.href)){
                      let email = window.localStorage.getItem('emailForSignIn');
  
                      if (!email){
                        email = window.prompt('Please provide your email for confirmation');
                      }
                      //paersing the email  link provided
                      const result = this.afAuth.signInWithEmailLink(email, window.location.href)
                      if(result){
                      window.localStorage.removeItem('emailForSignIn');
                      this.emailRedirect = true;
                       db.object(`/users/${userId}`).update({status: 'online'});
                      this.router.navigate(['more-info1']);
                    } else console.log("An error occured: Cannot signInWithEmailLink")
                }
  
          } catch(err) {
                  console.log("Impossible de confirmer email: ", err)
          }*/
    }
  
      /*[********************************* REGISTER FUNCTION *****************]*/
  register(formData:any, showsuccessFullyMessage:boolean) {
      
    }
    
    updateProfile(name: string): Promise<any> {
    
        // Handle the case where the user is null (not authenticated)
        return Promise.reject("User not authenticated");
    
  }
  
  
  /***********************************************************************************
  *  Register step2 , state pseudo and birthday
  * this page is called just afetr register
  *  @param
  *  @return
  ***********************************************************************************/
   moreInfo1(pseudo:string, birth:string) {
  
    
    }
  
  
     /***********************************************************************************
     *  Register step3 , state school level and subjects
     * this page is called just afetr more-info1
     *  @param
     *  @return
     ***********************************************************************************/
     moreInfo2(ville: string, ecole: string, niveau: string, classe: string, choix1: string, choix2: string) {
    
    }

    
    /***********************************************************************************
    *  this  is called if user more-info1  are not stated
    * In this case when user logs , he is redirecting here
    *  @param
    *  @return
    ***********************************************************************************/
  
    moreInfo1Update(pseudo:string, birth:string) {

  }
  
  /***********************************************************************************
  *  this  is called if user more-info2  are not stated
  * In this case when user logs , he is redirecting here
  *  @param
  *  @return
  ***********************************************************************************/

moreInfo2Update(ville: string, ecole: string, niveau: string, classe: string, choix1: string, choix2: string) {

}

  
  /***********************************************************************************
  *  this is a login function
  *
  *  @param
  *  @return
  ***********************************************************************************/
   login(email: string, password: string) {
 
  }
  
  /***********************************************************************************
  *  login with social media
  *
  *  @param
  *  @return
  ***********************************************************************************/
  signInWithGoogleProvider(showsuccessFullyMessage:boolean){
  
    return false;
  }
  
  signInWithFacebookProvider(showsuccessFullyMessage:boolean){
  
    /*let db = this.db;
    const provider = new firebase.auth.FacebookAuthProvider();
  
    this.afAuth.signInWithPopup(provider)
    .then((resp) => {
              if(resp !== undefined && resp !== null && resp.user){
                  let userId = resp.user.uid;
                 
                                  let path = '/users/'+userId;
                                    return db.object(path).valueChanges()
                                    .subscribe((user:any) => {
                                        if(user === undefined || user === null){
                                          console.log("You must provided moreInfo1 data")
                                          this.router.navigate(['more-info1/register/update']);
                                          return ;
                                        }
                                  let moreInfo1 = (<UserCred>user);
                                  console.log("more1: ", moreInfo1)
  
                                  if(moreInfo1.birth === undefined || moreInfo1.birth === null
                                    || moreInfo1.pseudo === undefined || moreInfo1.pseudo === null ){
                                      console.log("You must provided moreInfo1 data")
                                      this.router.navigate(['more-info1/register/update']);
                                      return;
                                  }
                                  let moreInfo2 = (<UserCred2>user);
                                    console.log("more2: ", moreInfo2)
                                  if(moreInfo2.ville === undefined || moreInfo2.ecole === undefined || moreInfo2.niveau === undefined
                                    || moreInfo2.classe === undefined || moreInfo2.choix === undefined || moreInfo2.ville === null
                                    || moreInfo2.ecole === null || moreInfo2.niveau === null || moreInfo2.classe === null
                                    || moreInfo2.choix === null){
  
                                      console.log("You must provided moreInfo2 data")
                                      this.router.navigate(['more-info2/register/update']);
                                      return;
                                  }
  
                                  //SET LOGIN SESSION IN LOCAL STORAGE
                                //  if(!localStorage.getItem(`ng-chat-users-${userId}`))
                                  //    localStorage.setItem(`ng-chat-users-${userId}`, JSON.stringify(moreInfo2));
  
                                      // LOCAL STORAGE
                                      if(!localStorage.getItem(`${this.localStorageKey}`))
                                            this.persistanceService.set(`${this.localStorageKey}`, moreInfo2);
                                      //this.isLoginSubject.next(true);
  
                                      //SESSION STORAGE
                                    //  this.sessionStorage.set( `${this.localStorageKey}`, JSON.stringify(moreInfo2) )
  
                  
                this.router.navigate(['profile']);
                console.log("Nice, You're authentify");
              })
    }
  })
    .catch((err:any) => {
                console.log("Cannnot authenticate your email")
                this.router.navigate(['login']);
    })*/
  }
  
  
  signInWithTwitterProvider(showsuccessFullyMessage:boolean){
    return false;
  }
  /***********************************************************************************
  *  this page islog out function
  * After logs out , user is redirecting to login page
  *  @param
  *  @return
  ***********************************************************************************/
  logout() {

  }
  
  
  // -------------------------------------------------------------
  //
  //                   END AuthService
  //
  // -------------------------------------------------------------
  

}