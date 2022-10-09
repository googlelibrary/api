import { fetch } from "../../../util/fetch"
import Cors from 'cors'
import initMiddleware from '../../../lib/int-middelware'

// Initialize the cors middleware
const cors = initMiddleware(Cors({methods: ['GET'],}))

export default async function handler(req, res) {
    await cors(req, res)
    if (req.method == 'GET') {
      res.status(200).json({ "error": "path is not specified. try '/videoId''" })
    } else {
      let reason = "" + req.method + " Method is Not Allowed"
      res.status(405).json({ "error": { "code": "405", "reason": reason } })
    }
  }
  
