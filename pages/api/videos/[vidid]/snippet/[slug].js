import { fetch } from "../../../../../util/fetch"
import Cors from 'cors'
import initMiddleware from '../../../../../lib/int-middelware'

// Initialize the cors middleware
const cors = initMiddleware(Cors({methods: ['GET'],}))

export default async function handler(req, res) {
    await cors(req, res)
    if (req.method == 'GET') {
        const vidid = req.query.vidid
        const id = req.query.slug
        const fetchs = await fetch();
        const data = fetchs.data.find(item => item.id === vidid)
        if (id == 'categoryId') {
            res.status(200).json(data.snippet.categoryId)
        } else if (id == 'channelId') {
            res.status(200).json(data.snippet.channelId)
        } else if (id == 'channelUrl') {
            res.status(200).json(data.snippet.channelUrl)
        } else if (id == 'channelTitle') {
            res.status(200).json(data.snippet.channelTitle)
        } else if (id == 'defaultAudioLanguage') {
            res.status(200).json(data.snippet.defaultAudioLanguage)
        } else if (id == 'description') {
            res.status(200).json(data.snippet.description)
        } else if (id == 'liveBroadcastContent') {
            res.status(200).json(data.snippet.liveBroadcastContent)
        } else if (id == 'publishedAt') {
            res.status(200).json(data.snippet.publishedAt)
        } else if (id == 'tags') {
            res.status(200).json(data.snippet.tags)
        } else if (id == 'description') {
            res.status(200).json(data.snippet.description)
        } else if (id == 'title') {
            res.status(200).json(data.snippet.title)
        } else if (id == 'videoId') {
            res.status(200).json(data.snippet.videoId)
        } else if (id == 'videoUrl') {
            res.status(200).json(data.snippet.videoUrl)
        }
    } else {
        let reason = "" + req.method + " Method is Not Allowed"
        res.status(405).json({ "error": { "code": "405", "reason": reason } })
    }
}
