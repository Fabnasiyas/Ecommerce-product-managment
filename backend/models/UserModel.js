import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    wallet: {
        type: Number,
        default: 0
    }, wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
