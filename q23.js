//create folder mongo-replica
//create folders usa,uk,india inside monogo_replica folder

// mongod -replSet rs1 --dbpath "C:\monogo_replica\usa" --port 27018

//mongod -replSet rs1 --dbpath "C:\mongo_replica\uk" --port 27019

//mongod -replSet rs1 --dbpath "C:\mongo_replica\india" --port 27020
//mongosh --port 27018
rs.initiate({
    _id:"rs1",
    members:[
        {_id:0,host:"127.0.0.1:27018"},
        {_id:1,host:"127.0.0.1:27019"},
        {_id:2,host:"127.0.0.1:27020"}
    ]
})

//rs.status()
//mongosh "mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020/?replicaSet=rs1"

//db.users.insertOne({name:"Ekshindeep",age:21})

//mongosh --port 27019
//db.getMongo().setReadPref("secondary") => if unable to read from secondary then it will read from primary