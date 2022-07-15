import minibase from '../lib/minibase.js'

export async function get() {
    const posts = await minibase.get('posts')

    console.log(posts)

    return {
        body: {
            posts: JSON.stringify(posts)
        }
        
    }
}
