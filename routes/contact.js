const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/createContact',(req,res,next)=>{
    let contact = req.body;
    query = "insert into contact (first_name,last_name,email,mobile_number) values(?,?,?,?)";
    connection.query(query,[
        contact.first_name,contact.last_name,contact.email,
        contact.mobile_number,contact.data_store],(err,results)=>{
            if(!err){
                return res.status(200).json({message:"Contact added successfully"});
            }
            else
            return res.status(500).json(err);
        })
})

router.get('/getContact',(req,res,next)=>{
    var query = "select *from contact where contact_id=?";
    const contact_id= req.body.contact_id;
    connection.query(query,[contact_id],(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.post('/updateContact',(req,res,next)=>{
    const contact_id =req.body.contact_id;
    let contact = req.body;
    var query = "update contact set email=?,mobile_number=? where contact_id=?";
    connection.query(query,[contact.email,contact.mobile_number,contact_id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Contact id does not found"});
            }
            return res.status(200).json({message:"Contact Updated Successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    });
});

router.post('/deleteContact',(req,res,next)=>{
    const contact_id = req.body.contact_id;
    var query ="delete from contact where contact_id=?";
    connection.query(query,[contact_id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Contact id does not found"});
            }
            return res.status(200).json({message:"Contact Deleted Successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    });
});

module.exports = router;