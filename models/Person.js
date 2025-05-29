const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxlength: [50, 'Name cannot exceed 50 characters']
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [0, 'Age must be a positive number'],
        max: [150, 'Age must be realistic']
    },
    gender: {
        type: String,
        required: [true, 'Gender is required'],
        enum: {
            values: ['Male', 'Female', 'Other'],
            message: 'Gender must be Male, Female, or Other'
        }
    },
    mobileNumber: {
        type: String,
        required: [true, 'Mobile number is required'],
        validate: {
            validator: function(v) {
                return /^[0-9]{10}$/.test(v);
            },
            message: 'Mobile number must be exactly 10 digits'
        }
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

// Index for better query performance
personSchema.index({ name: 1 });
personSchema.index({ mobileNumber: 1 }, { unique: true });

module.exports = mongoose.model('Person', personSchema);