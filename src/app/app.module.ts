import {NgModule,} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import {TaskManagerComponent} from './task-mamager.component';
@NgModule({
    declarations:[
    ],
    imports:[
        BrowserModule,FormsModule,AppComponent,TaskManagerComponent,
    ],
    providers:[],
    bootstrap:[],
})
export class AppModule {}