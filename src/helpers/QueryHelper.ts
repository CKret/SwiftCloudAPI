import { Response } from "express"
import { StatusCodes } from "http-status-codes"

export class QueryHelper {
    static async makeQuery<T>(query: Promise<T>, res: Response) {
        try {
            const result: T = await query
            if (!result) {
                return res.status(StatusCodes.NOT_FOUND).json({error : 'Not found!'})
            }
    
            return res.status(StatusCodes.OK).json(result)
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
        }
    }    
}