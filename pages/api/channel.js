import { fetch } from "../../util/channel"
import Cors from 'cors'
import initMiddleware from '../../lib/int-middelware'

// Initialize the cors middleware
const cors = initMiddleware(Cors({methods: ['GET'],}))

export default async function handler(req, res) {
    await cors(req, res)
    if (req.method == 'GET') {
        const fetchs = await fetch();
        const data = fetchs.data.find(item => item.id === "UCO6hUXap6fgAeCjN6zGLzKA")
        res.status(200).json(data)
    } else {
      let reason = "" + req.method + " Method is Not Allowed"
      res.status(405).json({ "error": { "code": "405", "reason": reason } })
    }
  }
  
