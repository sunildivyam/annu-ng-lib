import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoggedInGuard } from './is-logged-in.guard';
import { RoleAuthorGuard } from './role-author.guard';
import { RoleAdminGuard } from './role-admin.guard';
import { RoleReaderGuard } from './role-reader.guard';
import { RoleEditorGuard } from './role-editor.guard';
import { RoleManagerGuard } from './role-manager.guard';
import { RolePaidMemberGuard } from './role-paid-member.guard';
import { RoleStudentGuard } from './role-student.guard';
import { RoleTeacherGuard } from './role-teacher.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    IsLoggedInGuard,
    RoleAuthorGuard,
    RoleAdminGuard,
    RoleReaderGuard,
    RoleEditorGuard,
    RoleManagerGuard,
    RolePaidMemberGuard,
    RoleStudentGuard,
    RoleTeacherGuard,
  ],
})
export class RouteGuardsModule { }
