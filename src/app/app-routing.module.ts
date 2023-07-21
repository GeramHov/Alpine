import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildComponent } from './components/build/build.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PrebuildComponent } from './components/prebuild/prebuild.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'choose-to-build', component: PrebuildComponent },
  { path: 'build', component: BuildComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'test', component: TestComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'disabled', // Add this option
    anchorScrolling: 'disabled', // Optional: Disable anchor scrolling as well
    scrollOffset: [0, 0], // Optional: Define a scroll offset if needed
  }),],
  exports: [RouterModule],
})
export class AppRoutingModule {}
