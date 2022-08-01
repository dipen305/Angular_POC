import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { filter } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.scss']
})
export class HttpDemoComponent implements OnInit {
  errorMessage = '';
  activeId = 0;
  activeRecordId = '';
  title: string = '';
  description: string = '';
  postData!: any;
  isFetching = false;
  @ViewChild('form') form!: NgForm;
  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.onFetchData();
  }

  onSubmit() {
    let data = { 'title': this.title, 'description': this.description }
    let isDuplicate = this.duplicateCheck(this.postData);
    if (!isDuplicate) {
      this.isFetching = true;
      this.postService.createPost(data).subscribe((response) => {
        this.form.reset();
        this.onFetchData();
      })
    } else {
      this.errorMessage = 'Can not insert data with same title!';
    }
  }

  onFetchData() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe({
      next: (response) => {
        this.postData = response
        this.onCardSelection(0);
        this.isFetching = false;
      }, error: (error) => {
      this.errorMessage = 'Something went wrong. Please try again later!';
        this.isFetching = false
      }
    })
  }

  onDelete() {
    this.isFetching = true;
    this.postService.deletePosts(this.postData, this.activeRecordId).subscribe({
      next: (res) => {
        console.log(res);
        this.onFetchData();
      }, error: (error) => {
      this.errorMessage = 'Something went wrong. Please try again later!';
        this.isFetching = false
      }
    })
  }
  onCardSelection(index: number) {
    this.activeId = index;
    this.activeRecordId = this.postData[this.activeId].id
    console.log(index);
    this.title = this.postData[index].title;
    this.description = this.postData[index].description;
  }
  onUpdateData() {
    let data = { 'title': this.title, 'description': this.description }
    let isDuplicate = this.duplicateCheck(this.postData);
    if (!isDuplicate) {
      this.postService.updatePosts(data, this.activeRecordId).subscribe((response) => {
        console.log(response);
        this.onFetchData();
      })
    } else {
      
      this.errorMessage = 'Can not update data with same title!';
    }

  }
  duplicateCheck(data: string[]) {
    return data.some((item: any) => item.title === this.title);
  }
}
