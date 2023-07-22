import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildComponent } from './components/build/build.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PrebuildComponent } from './components/prebuild/prebuild.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TestComponent } from './components/test/test.component';
import { DealerComponent } from './components/dealer/dealer.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'choose-to-build', component: PrebuildComponent },
  { path: 'build', component: BuildComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'test', component: TestComponent },
  { path: 'dealer', component: DealerComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'disabled', 
    anchorScrolling: 'disabled',
    scrollOffset: [0, 0],
  }),],
  exports: [RouterModule],
})
export class AppRoutingModule {}
