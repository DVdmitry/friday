import {InjectionToken} from "@angular/core";

export interface AppConfig {
  experimentalEnabled: boolean
}

// export const APP_CONFIG = new InjectionToken<AppConfig>('app_config', {
//   providedIn: 'root',
//   factory: () => ({
//     experimentalEnabled: true
//   })
// })

export const APP_CONFIG = new InjectionToken<AppConfig>('app_config', {
  providedIn: 'root',
  factory: () => ({
    experimentalEnabled: true
  })
})

// export const APP_CONFIG = new InjectionToken<AppConfig>('app_config')

// export const appConfig: AppConfig = {
//   experimentalEnabled: true
// }
