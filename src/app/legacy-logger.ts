import {ILogger} from "./logger";

export const legacyLogger: ILogger = {
  prefix: 'legacy root',
  log: (message: string): void => {
    console.log(`(legacy): ${message}`)
  }
}
