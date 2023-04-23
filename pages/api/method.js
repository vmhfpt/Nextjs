// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
     const {method} = req;
     switch(method){
        case "GET": {
            res.status(200).json({status: "success", method : "GET"});
            break;
        }
        case "POST": {
            res.status(200).json({status: "success", method : "POST"});
            break;
        }
        case "DELETE": {
            res.status(200).json({status: "success", method : "DELETE"});
            break;
        }
        case "PUT": {
            res.status(200).json({status: "success", method : "PUT"});
            break;
        }
        default : {
            res.status(200).json({status: "success", method : "underfine"});
        }
     }
  }
  