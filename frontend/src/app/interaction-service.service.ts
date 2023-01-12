import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  // [x: string]: any;

  
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://localhost:3000/fetch')
  }
  postData(data:string){
    return this.http.post('http://localhost:3000/postData',data)
  }

  // putUpdate(data:any){
  //   return this.http.put('http://localhost:3000/update/',data)
  // }
  updateData(data:any){
    return this.http.put('http://localhost:3000/update/'+data.ID,data)
  }
  singleData(ID:any){
    return this.http.get('http://localhost:3000/update/'+ID)
  }

  delete(ID:any){
    return this.http.delete('http://localhost:3000/del/'+ID)
  }
}