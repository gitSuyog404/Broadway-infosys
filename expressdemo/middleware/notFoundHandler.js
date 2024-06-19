// If built in middleware lai ovveride garne ho vane chai
// let function_name =(err,req,res,next)=>{} hunxa

let notFoundHandler = (req, res, next) => {
  let err = new Error(`Cannot find ${req.method} method on route ${req.url}`);

  err.status = 404;
  next(err);
};

export default notFoundHandler;
