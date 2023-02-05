import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AddUserComponent} from "../add-user/add-user.component";
import {AddProductComponent} from "../add-product/add-product.component";
import {AdminComponent} from "./admin.component";
import {PermissionsGuard} from "../auth/permissions.guard";
import {AuthenticationGuard} from "../auth/authentication.guard";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthenticationGuard],
    canActivateChild: [PermissionsGuard],
    children: [
      {
        path: 'add-user',
        component: AddUserComponent
      },
      {
        path: 'add-product',
        component: AddProductComponent
      }
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
