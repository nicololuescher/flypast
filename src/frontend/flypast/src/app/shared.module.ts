import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PushModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, PushModule, TranslateModule.forChild()],
    exports: [FormsModule, ReactiveFormsModule, PushModule]
})
export class SharedModule {}
