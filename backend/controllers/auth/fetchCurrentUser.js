
 const fetchCurrentUser = async (req, res) => {

      const user = req.user;
      return res.status(200).json(user);
 
}

module.exports = fetchCurrentUser;