//mongod --configsvr -replSet cf --dbpath "C:\dbshards\conf" --port 27018
//mongod --configsvr -replSet cf --dbpath "C:\dbshards\confr" --port 27019
//mongosh --port 27018
rs.initiate({
    _id:"cf",
    members:[
        {_id:0,host:"127.0.0.1:27018"},
        {_id:1,host:"127.0.0.1:27019"}
    ]
})
//rs.config()
//rs.status()

//mongod --shardsvr -replSet s1 --dbpath "C:\dbshards\s1" --port 27020
//mongod --shardsvr -replSet s1 --dbpath "C:\dbshards\s1r" --port 27021
//mongosh --port 27020
rs.initiate({
    _id:"s1",
    members:[
        {_id:0,host:"127.0.0.1:27020"},
        {_id:1,host:"127.0.0.1:27021"}
    ]
})
//rs.config()
//rs.status()

//mongod --shardsvr -replSet s2 --dbpath "C:\dbshards\s2" --port 27022
//mongod --shardsvr -replSet s2 --dbpath "C:\dbshards\s2r" --port 27023
//mongosh --port 27022

rs.initiate({
    _id:"s2",
    members:[
        {_id:0,host:"127.0.0.1:27022"},
        {_id:1,host:"127.0.0.1:27023"}
    ]
})

//rs.config()
//rs.status()


//mongos --configdb cf/127.0.0.1:27018,127.0.0.1:27019 --port 27050

//mongosh -port 27050

sh.addShard("s1/127.0.0.1:27020,127.0.0.1:27021")
sh.addShard("s2/127.0.0.1:27022,127.0.0.1:27023")
sh.status()