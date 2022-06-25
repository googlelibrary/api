export default async function handler(req, res) {
  if(req.method == 'GET'){
  res.status(200).json({"error" : "path is not specified. try '/videos' or '/latest'"})
  } else {
    let reason = ""+req.method+" Method is Not Allowed"
    res.status(405).json({"error":{"code":"405", "reason":reason}})
  }
}
