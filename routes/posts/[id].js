import minibase from '../../lib/minibase.js'

export async function get({params}) {

    let message = "here is the post"
    const posts = await minibase.get('posts', {postId: params.id})

    if(posts.length !== 1) {
        message = "Post not found"

        return {
            status: 404,
            body: {
                message
            }
        }

    }

    console.log(posts[0])
    return {
        body: {
            title: posts[0].title,
            body: posts[0].body

        }
    }

}
