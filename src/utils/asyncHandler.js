const asynHandler = (requestHandler) => {
    return (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next))  // here requestHandler fun we are passing should itself run Asynchronously 
        .catch((err) => next(err)) // error will be handled by error handling middleware by calling next(err)
    }
}

// const asynHandler = (requestHandler) => {
//     async (req,res,next) => {
//         try {
//             await requestHandler(req,res,next)
//         }
//         catch (error) {
//             res.status(error.code || 500).json({
//                 success: false,
//                 message: error.message
//             })
//         }
//     }
// }

export { asynHandler }