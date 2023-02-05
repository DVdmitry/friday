import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {AddUserComponent} from "../add-user/add-user.component";
import {AddProductComponent} from "../add-product/add-product.component";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  imports: [CommonModule, AdminRoutingModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  declarations: [AdminComponent, AddUserComponent, AddProductComponent],
  exports: [AdminComponent]
})

export class AdminModule {}
