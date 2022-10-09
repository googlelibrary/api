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
        if (id == 'commentCount') {
            res.status(200).json(data.statistics.commentCount)
        } else if (id == 'dislikeCount') {
            res.status(200).json(data.statistics.dislikeCount)
        } else if (id == 'favoriteCount') {
            res.status(200).json(data.statistics.favoriteCount)
        } else if (id == 'likeCount') {
            res.status(200).json(data.statistics.likeCount)
        } else if (id == 'viewCount') {
            res.status(200).json(data.statistics.viewCount)
        }
    } else {
        let reason = "" + req.method + " Method is Not Allowed"
        res.status(405).json({ "error": { "code": "405", "reason": reason } })
    }
}
