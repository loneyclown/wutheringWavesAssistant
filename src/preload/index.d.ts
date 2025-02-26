import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      selectDirs: () => Promise<string[]>
      path: path.PlatformPath
      fs: typeof fs
      // pathJoin: (...args: string[]) => Promise<string>
    }
  }
}
