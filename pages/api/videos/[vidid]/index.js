import { fetch } from "../../../../util/fetch"
import Cors from 'cors'
import initMiddleware from '../../../../lib/int-middelware'

// Initialize the cors middleware
const cors = initMiddleware(Cors({methods: ['GET'],}))

export default async function handler(req, res) {
    await cors(req, res)
    if (req.method == 'GET') {
        const vidid = req.query.vidid
        const fetchs = await fetch();
        const data = fetchs.data.find(item => item.id === vidid)
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json({"error":{"code":"404", "reason":"404 Not Found"}})
        }
    } else {
        let reason = "" + req.method + " Method is Not Allowed"
        res.status(405).json({ "error": { "code": "405", "reason": reason } })
    }
}
