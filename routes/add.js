import minibase from '../lib/minibase.js'
import {customAlphabet} from 'nanoid'

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwzyz', 10)

export async function post({request}) {
    const _body = await request.formData()

    const title = _body.get('title')
    const body = _body.get('body')

    let message = "title and body should be provided"
    console.log(_body)

    if(title && body) {
        await minibase.insert('posts', {title, body, postId: nanoid(10)})
        message = "Post created successfully"
    }

    return {
        body: {
            message
        }
    }

}
