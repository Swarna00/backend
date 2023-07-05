//console.log("hellow developer")

// const myModule = require("./modulePack")
// console.log(myModule.firstName())
// console.log(myModule.details())
const fs = require('fs');
//console.log(fs)

//file write
// fs.writeFile("student.txt", "swarna",(error)=>{
//     if(error){
//       console.log(error)
//     }else{
//         console.log("success")
//     }
// })

//file update
// fs.appendFile("student.txt", "programmer",(error)=>{
//     if(error){
//       console.log(error)
//     }else{
//         console.log("updated")
//     }
//})

//file rename
// fs.rename("student.txt", "studentDetails",(error)=>{
//     if(error){
//       console.log(error)
//     }else{
//         console.log("rename")
//     }
// })

//file deleted

// fs.unlink("studentDetails",(msg)=>{
//     if(msg){
//         console.log("not deleted")
//     }else{
        
//         console.log("deleted")
//     }
// })

//  fs.exists("student.txt",(err)=>{
//      if(err){
//          console.log("found")
//      }else{
        
//          console.log("not found")
//      }
// })

//sychronous

let writeSys= fs.writeFileSync("ourmember.txt","hlw")
     if(writeSys){
         console.log(writeSys)
     }else{
        
         console.log("success")
     }
