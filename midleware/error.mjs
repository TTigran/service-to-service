import createError from 'http-errors';

const notFound =(req, res, next) => {
  next(createError(404));
}

const  internalServer = (err, req, res, next) => {
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
}

export default {internalServer,notFound}
