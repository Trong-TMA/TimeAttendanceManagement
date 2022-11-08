import { ChamCongModule } from './pages/cham-cong/cham-cong.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import {ButtonModule} from 'primeng/button';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
registerLocaleData(vi);
import { NZ_DATE_LOCALE, NZ_I18N, vi_VN } from 'ng-zorro-antd/i18n';
import { AuthInterceptor } from './auth/auth.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { ChamCongComponent } from './pages/cham-cong/cham-cong.component';
import { LichSuChamCongComponent } from './pages/lich-su-cham-cong/lich-su-cham-cong.component';
export function tokenGetter(){
  return localStorage.getItem("token");
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    DashboardRoutingModule,
    NzBreadCrumbModule,
    ButtonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5000", "localhost:5001"],
        disallowedRoutes: []
      }
    }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN },
    { provide: NZ_DATE_LOCALE, useValue: vi},
    {
      provide: [HTTP_INTERCEPTORS],
      multi: true,
      useClass: AuthInterceptor },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
