const Todo = require('../models/Todo');

    

module.exports.home = function(req,res){
      //return res.end('<h1>Up for Codeial!</h1>')
      Todo.find({},function(err,todos){
        if(err){
          console.log("error in fetching from db");
          return;
        }
        return res.render('home',{
          title: 'TODO',
          todo_list :todos
        });
      })
     
   }
   
module.exports.addItem = function(req,res){
  console.log("hello")
Todo.create({
  task:req.body.task,
  date:req.body.date,
  category:req.body.category

},function(err,newItem){
  if(err){
    console.log('error creating item');
        return;
  }
  console.log("new task phew!!");
      return res.redirect('back');
})  ;
}

module.exports.deleteItem = function(req,res){
  sp = req.query.id; // getting the id from ui
  newsp = sp.split(','); 
  for(let i=0;i<newsp.length;i++){ // looping over newsp  to delete all the checked value
      Todo.findByIdAndDelete(newsp[i],function(err){
          if(err){
              console.log('err')
              return;
          }
      })
  }
  return res.redirect('/');
    //return res.redirect('back');
  
}

//for editing data

module.exports.editData = function(req,res){
  console.log(req.query.id);
  Todo.findById(req.query.id,function(err,todolist){
    if(err){ console.log(' its an error finding item'); return}
    return res.render('edit',{
    
    todolist : todolist
    })
})
}

// function for updatind tada after the todo is being edited
module.exports.editDetails = function(req,res){
  console.log(req.body);
  //dueDate =req.body.dueDate.split('-'); // splitting date and taking montha value
  //let newdate='';
  //newdate= DateValeu(dueDate);     
   Todo.updateOne({_id:req.query.id},{$set:{task:req.body.desc,category:req.body.category,date:req.body.date}} ,function(err,todoData){
      if(err){console.log('erroe while updating'); return}
      return res.redirect('/')
  })
}


   //module.exports.actionName = function(req,res)


   // todo.find({},function(err,toItems){
//     if(err){
//       console.log("error in fetching ");
//       return;
//     }
    
//     // return res.render("home",{
//     //   title:"My Contacts List",
//     //   contacts_list:contacts
//     //   });
//     console.log(toItems);
//     });
