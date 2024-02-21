const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteFriend,
  deleteUser,
  addFriend,
} = require("../../controllers/userController");


// /api/users/
router.route("/") 
 .get(getUsers)
 .post(createUser);

 // /api/users/:userId
 router.route("/:userId")
 .get(getSingleUser)
 .put(updateUser)
 .delete(deleteUser);

 // /api/users/:userId/friends/:friendId
 router.route("/:userId/friends/:friendId")
 .post(addFriend)
 .delete(deleteFriend);

 module.exports = router;