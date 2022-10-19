// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { JsonWebTokenError } from 'jsonwebtoken'
import { Jwt } from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

const Key = 'wdhjdbfcjfvndskjlbvdscdskjvbdsvdfbncx'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(!req.body){
        res.statusCode = 404
        res.end('Error')
        return
    }
    const {username, password} = req.body

    res.json({
        // token:Jwt.sign({
        //     username:'',
        //     admin: username==='admin' && password==='admin' 
        // },
        // Key)
    })

}
