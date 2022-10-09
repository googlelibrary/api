import { fetch } from "../../../util/fetch"
import Cors from 'cors'
import initMiddleware from '../../../lib/int-middelware'

// Initialize the cors middleware
const cors = initMiddleware(Cors({methods: ['GET'],}))

export default async function handler(req, res) {
    await cors(req, res)
    if (req.method == 'GET') {
        const id = req.query.id
        const fetchs = await fetch();
        res.status(200).json(fetchs.data)
    } else {
        let reason = "" + req.method + " Method is Not Allowed"
        res.status(403).json({ "error": { "code": "405", "reason": reason } })
    }
}
