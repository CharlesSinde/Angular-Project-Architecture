import { environment } from './../../../environments/environment';
import { Headers } from '@angular/http';

//basic auth eaxmple headers
export const customHeaders = {
    headers : new Headers({
        'Authorization' : 'Basic ' + window.btoa(environment.username + ':' + environment.password),
        'Content-Type' : 'application/json; charset=utf-8',
    })
};
