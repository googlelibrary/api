import { fetch } from "../../../util/fetch"

export default async function handler(req, res) {
    if (req.method == 'GET') {
        const id = req.query.id
        const fetchs = await fetch();
        res.status(200).json(fetchs.data)
    } else {
        let reason = "" + req.method + " Method is Not Allowed"
        res.status(403).json({ "error": { "code": "405", "reason": reason } })
    }
}
