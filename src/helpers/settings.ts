// import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
// import { Drivers, Storage } from '@ionic/storage';
import PocketBase from 'pocketbase'



/**
 *  NOTE: import PocketBasee and Storage in SettingContext file for to fix typing errors
 * 
 */
const appName = "Lookum"

const DEBUG = false

const LOCALHOST_URL = "http://127.0.0.1:8090"

const REMOTE_URL = "https://blockchain-logistics.pockethost.io"

const pocketbaseUrl = DEBUG ? LOCALHOST_URL  : REMOTE_URL

const pb = new PocketBase(pocketbaseUrl)


export default function Settings () {
    return {
        appName,
        pb,
        DEBUG,
        pocketbaseUrl
    }
}


