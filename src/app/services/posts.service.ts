import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  fetchPosts(){
    let  testParams =  new HttpParams();
    testParams = testParams.append('print','pretty');
    return this.http.get('https://angular-poc-e3c64-default-rtdb.firebaseio.com/posts.json',{
      headers: new HttpHeaders({'Custom-Header':"Demo Header"}),
      params:testParams,
      responseType:'json'
    }).pipe(map((responseData:any)=>{
      const postsArray = [];
      for(const key in responseData){
        postsArray.push({...responseData[key],id:key});
      }
    return postsArray;
    }))
  }

  createPost(data:any){
   return this.http.post('https://angular-poc-e3c64-default-rtdb.firebaseio.com/posts.json',data);
  }

  deletePosts(data:any,id:string){
    console.log(data);
   return this.http.delete('https://angular-poc-e3c64-default-rtdb.firebaseio.com/posts/'+id+'.json');
  }

  updatePosts(data:any,id:string){
    console.log(data);
   return this.http.patch('https://angular-poc-e3c64-default-rtdb.firebaseio.com/posts/'+ id+'.json',data);
  }
}
