const { Parent, Children} = require('../models/newAccount');

class NewAccount {

  addParent = async (data) => {
    // console.log('data for adding parent toDB: ',data)
    try {
      const newParent = await Parent.create({
        FirstName: data.parent_info.FirstName,
        LastName: data.parent_info.LastName,
        Email: data.parent_info.Email, 
        password: data.parent_info.password,
        hear_about_us: data.parent_info.hear_about_us,
        child_count: data.child_count,
      })

      // console.log('newParent id: ', newParent.id)
      return newParent.id;
    } catch (e) {
      console.log(e)
    }
  }


}

module.exports = { NewAccount }