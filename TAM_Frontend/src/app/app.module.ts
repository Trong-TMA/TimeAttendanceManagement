import { DeXuatHoGiaDinhModule } from './pages/de-xuat-ho-gia-dinh/de-xuat-ho-gia-dinh.module';

import { LichSuTonVinhModule } from './pages/lich-su-ton-vinh/lich-su-ton-vinh.module';
import { ImportNguoiHienMauModule } from './pages/import-nguoi-hien-mau/import-nguoi-hien-mau.module';
import { DanhSachHienMauModule } from './pages/danh-sach-hien-mau/danh-sach-hien-mau.module';
import { DonViModule } from './pages/don-vi/don-vi.module';
import { DonViComponent } from './pages/don-vi/don-vi.component';
import { DonViRoutingModule } from './pages/don-vi/don-vi-routing.module';
import { DeXuatCaNhanModule } from './pages/de-xuat-ca-nhan/de-xuat-ca-nhan.module';
import { DotTonVinhRoutingModule } from './pages/dot-ton-vinh/dot-ton-vinh-routing.module';
import { DotTonVinhModule } from './pages/dot-ton-vinh/dot-ton-vinh.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
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
export function tokenGetter(){
  return localStorage.getItem("token");
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    DotTonVinhRoutingModule,
    DonViRoutingModule,
    DashboardRoutingModule,
    NzBreadCrumbModule,
    ButtonModule,
    DonViModule,
    DanhSachHienMauModule,
    ImportNguoiHienMauModule,
    LichSuTonVinhModule,
    DeXuatHoGiaDinhModule,
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
