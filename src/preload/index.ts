import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge, ipcRenderer } from 'electron'
import * as fs from 'fs'
import path from 'path'

// Custom APIs for renderer
const api = {
  selectDirs: (): Promise<string[]> => ipcRenderer.invoke('select-dirs'),
  path,
  fs
  // pathJoin: (...args: string[]): Promise<string> => ipcRenderer.invoke('path-join', ...args)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
