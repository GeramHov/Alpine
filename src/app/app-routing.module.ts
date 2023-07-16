import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildComponent } from './components/build/build.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PrebuildComponent } from './components/prebuild/prebuild.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'choose-to-build', component: PrebuildComponent },
  { path: 'build', component: BuildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
