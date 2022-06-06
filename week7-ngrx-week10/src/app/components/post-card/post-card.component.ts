import { Component, Input, OnInit } from '@angular/core';
import { Comment, Post } from 'src/app/models/post.model';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {

  @Input() post: Post;
  commentDescription = '';

  constructor(private baseService: BaseService) {}

  ngOnInit(): void { }

  addComment() {
    const comment: Comment = {
      id: 124,
      description: this.commentDescription,
    };
    this.baseService.addComment(comment, this.post.id);
  }

  deleteComment(id: any) {
    this.baseService.deleteComment(id, this.post.id);
  }
}
