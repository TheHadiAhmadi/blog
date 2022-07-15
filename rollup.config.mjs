import kite from 'ht-kit/rollup.js'
import dotenv from 'dotenv'
dotenv.config()

const config = kite({
    routes: './routes',
    output: './output',
    adapter: 'deno'
})

export default config
