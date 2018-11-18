module.exports = (UsersSchema, ClubSchema, ApplierSchema)=>{

  UsersSchema.post('save', (error, res, next)=>{
    if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
    else if(error.name === "ValidationError") next(new ValidationError(error.message));
    else next(error);
  });
  UsersSchema.post('update', (error, res, next)=>{
    if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
    else if(error.name === "ValidationError") next(new ValidationError(error.message));
    else next(error);
  });
  ClubSchema.post('save', (error, res, next)=>{
    if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
    else if(error.name === "ValidationError") next(new ValidationError(error.message));
    else next(error);
  });
  ClubSchema.post('update', (error, res, next)=>{
    if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
    else if(error.name === "ValidationError") next(new ValidationError(error.message));
    else next(error);
  });
  ApplierSchema.post('save', (error, res, next)=>{
    if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
    else if(error.name === "ValidationError") next(new ValidationError(error.message));
    else next(error);
  });
  ApplierSchema.post('update', (error, res, next)=>{
    if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
    else if(error.name === "ValidationError") next(new ValidationError(error.message));
    else next(error);
  });
}
