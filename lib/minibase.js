import Minibase from "./minibase-sdk.js";
import dotenv from 'dotenv'
dotenv.config()


let apiKey='DMnpugfXJRAXRomsf72zW5DQFVMY8bn'
let appName='blog'



export default new Minibase(appName, apiKey, {mode: 'online'})
