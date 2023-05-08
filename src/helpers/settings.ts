// import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
// import { Drivers, Storage } from '@ionic/storage';
import PocketBase from 'pocketbase'



/**
 *  NOTE: import PocketBasee and Storage in SettingContext file for to fix typing errors
 * 
 */
const appName = "Lookum"

const DEBUG = true

const pocketbaseUrl = DEBUG ? "http://127.0.0.1:8090" : "https://"

const pb = new PocketBase(pocketbaseUrl)


export default function Settings () {
    return {
        appName,
        pb,
        DEBUG,
        pocketbaseUrl
    }
}


