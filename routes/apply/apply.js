module.exports = (app, Clubs, rndstring)=>{
  app.get('/apply/:token', async (req,res)=>{
      const token = req.params.token;
      const club = await Clubs.findOne({token: token});
        if(req.session.logined) {
         res.render('form', {item: club, id: req.session.user_id });
        } else {
          res.render('form', {item: club, id: false});
        }

  })
  .post('/apply/:token', async (req,res)=>{
      const id = req.body.id;
      const name = req.body.name;
      const pr = req.body.pr;
      const reason = req.body.reason;
      const token = rndstring.generate(40);
      Clubs.findOne({token: req.params.token}, function(err, rawContent){
          if(err) throw err;

          rawContent.appliers.unshift({ id: id, name: name, pr: pr, reason: reason, token: token });
          rawContent.save(function(err){
              if(err) throw err;
          });
      });
      res.redirect('/view/'+req.params.token);

  })

};
