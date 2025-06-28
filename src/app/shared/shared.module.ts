import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { ProductPricePipe } from './pipes/product-price.pipe';
import { BooksPipe } from './pipes/books.pipe';
import { UserSearchPipe } from './pipes/user-search.pipe';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [ProductPricePipe, BooksPipe, UserSearchPipe],
    exports: [
        ProductPricePipe,
        BooksPipe,
        UserSearchPipe
    ],
  providers: [
    UserService,
    AuthService,
    BooksPipe
  ]
})
export class SharedModule {}
