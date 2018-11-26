const assert = require('assert');
const User = require('../src/user');

describe('Reading user out of database', () => {
    let joe;
    beforeEach((done) => {
        joe = new User({name : 'joe'});
        joe.save()
            .then(()=> done());
    })
    it('finds all users with a name of joe', (done) => {
        User.find({name : 'joe'})
            .then((users) => {
                assert(users[0]._id.toString() === joe._id.toString());
                done();
            })
    });
    it('find a user with particular id', (done) => {
        User.findOne({ _id : joe._id})
            .then((user) =>{
                assert(user.name === 'joe')
                done();
            })
    })
})