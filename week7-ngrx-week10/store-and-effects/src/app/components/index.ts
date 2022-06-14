import { ErrorComponent } from "./error/error.component";
import { BaseComponent } from "./layout/base/base.component";
import { DashboardComponent } from "./layout/dashboard/dashboard.component";
import { HeaderComponent } from "./layout/header/header.component";
import { PostCardComponent } from "./post-card/post-card.component";
import { PostListComponent } from "./post-list/post-list.component";
import { UpdateUserComponent } from "./update-user/update-user.component";
import { UserCardComponent } from "./user-card/user-card.component";
import { UserListComponent } from "./user-list/user-list.component";

export const componentsList = [
    HeaderComponent,
    BaseComponent,
    DashboardComponent,
    ErrorComponent,
    PostCardComponent,
    PostListComponent,
    UpdateUserComponent,
    UserCardComponent,
    UserListComponent
]

export * from "./layout/base/base.component";
export * from "./layout/dashboard/dashboard.component";
export * from "./layout/header/header.component";
export * from "./error/error.component";
export * from "./post-card/post-card.component";
export * from "./post-list/post-list.component";
export * from "./update-user/update-user.component";
export * from "./user-card/user-card.component";
export * from "./user-list/user-list.component";