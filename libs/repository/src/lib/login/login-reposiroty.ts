import { Observable } from "rxjs";

export abstract class LoginReposiroty {
    abstract acceso(params : unknown) : Observable<unknown> ;
}
