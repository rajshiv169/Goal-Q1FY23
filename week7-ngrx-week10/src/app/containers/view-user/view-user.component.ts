import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap, takeWhile } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent implements OnInit {
  isAlive = true;
  user: User;
  constructor(private route: ActivatedRoute, private baseService: BaseService) {
    this.fetchData();
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.isAlive = false;
  }

  fetchData() {
    const user$ = this.route.params.pipe(map(data => data.id),
      takeWhile(() => this.isAlive),
      switchMap((id) => {
        return this.baseService.getUserById(id);
      }), filter(res => !!res));
    user$.subscribe(data => {
      this.user = data;
    });
  }
}
