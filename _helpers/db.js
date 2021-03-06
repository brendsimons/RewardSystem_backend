const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect(config.connectionString);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Task: require('../tasks/task.model'),
    Reward: require('../rewards/reward.model'),
    RewardClaim: require('../rewardclaims/rewardclaim.model'),
    TaskClaim: require('../taskclaims/taskclaim.model')
};