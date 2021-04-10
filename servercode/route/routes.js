var express=require('express');
const Item=require('../model/shoppingItem');
var router=express.Router();

router.get('/items',(req,res,next)=>{
Item.find(function(err,items){
   if(err){
      res.json(err);
   }else{
      res.json(items);
   }
})
});

router.post('/item',(req,res,next)=>{
let newShoppingItem=new Item({
   itemName:req.body.itemName,
   itemQuantity:req.body.itemQuantity,
   itemBought:req.body.itemBought,
   
});

newShoppingItem.save((err,item)=>{
   if(err){
      res.json(err);
   }else{
      res.json({msg:'Item has been added to db'});
   }
});

});

router.put('/item/:id',(req,res,next)=>{
   Item.findOneAndUpdate({_id:req.params.id},{
      $set:{
          itemName:req.body.itemName,
          itemQuantity:req.body.itemQuantity,
          itemBought:req.body.itemBought,
      }
   },
   function(err,result){
      if(err){
         res.json(err);
      }else{
         res.json(result);
      }
   });
});

router.delete('/test',(req,res,next)=>{

});
module.exports=router;