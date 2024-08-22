import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { AuthConfig, OAuthService, provideOAuthClient } from 'angular-oauth2-oidc';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, HttpClient, HttpHeaders } from '@angular/common/http';
import {jwtDecode} from 'jwt-decode'; // Import jwt-decode

const isBrowser = typeof window !== 'undefined';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'http://localhost:7080/realms/Learning%20Management%20System',
  tokenEndpoint: 'http://localhost:7080/realms/Learning%20Management%20System/protocol/openid-connect/token',
  redirectUri: isBrowser ? window.location.origin : '',
  responseType: "code",
  clientId: "Frontend",
  scope: "openid profile email"
};

function initializeOAuth(oauthservice: OAuthService, httpClient: HttpClient, router: Router): Promise<void> {
  return new Promise((resolve) => {
    oauthservice.configure(authCodeFlowConfig);
    oauthservice.setupAutomaticSilentRefresh();
    oauthservice.loadDiscoveryDocumentAndLogin().then(() => {
      const token = oauthservice.getAccessToken();
      if (token) {
        const decodedToken: any = jwtDecode(token); // Decode the token

        // Extract roles from the decoded token
        const roles = decodedToken?.realm_access?.roles || [];

        const email = decodedToken?.email || '';
        // Determine role and route accordingly
        if (roles.includes('Administrator')) {
          router.navigate(['/admin-dashboard']);
        } else if (roles.includes('Mentor')) {
          router.navigate(['/mentor-dashboard']);
        } else if (roles.includes('Joinee')) {
          router.navigate(['/joinee-dashboard']);
        } else {
          router.navigate(['/']);
        }
        console.log('User email:', email);
        resolve();
      } else {
        resolve();
      }
    });
  });
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideOAuthClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: (oauthservice: OAuthService, httpClient: HttpClient, router: Router) => {
        return () => initializeOAuth(oauthservice, httpClient, router);
      },
      multi: true,
      deps: [
        OAuthService,
        HttpClient,
        Router
      ]
    }, provideAnimationsAsync()
  ]
};