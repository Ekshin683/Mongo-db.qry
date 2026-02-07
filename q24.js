//login into replica set
//created hdfcbank database abd inserted EKshindee and Ajay into customers collection

const session = db.getMongo().startSession()

session.startTransaction()

var custCollection = session.getDatabase("hdfcbank").customers