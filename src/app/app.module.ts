import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BuildComponent } from './components/build/build.component';
import { PrebuildComponent } from './components/prebuild/prebuild.component';
import { RemoveUnderscorePipe } from './components/pipe/remove.underscore.pipe';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer/alpine.reducer';
import { SummaryComponent } from './components/summary/summary.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    BuildComponent,
    PrebuildComponent,
    RemoveUnderscorePipe,
    SummaryComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ configurator: reducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
