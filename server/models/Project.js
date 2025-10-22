import mongoose from 'mongoose';
const { Schema } = mongoose;
const projectSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Project name is required'],
            trim: true,
        },
        description: {
            type: String,
            trim: true,
            
        },
        projectCreator: {
            type: Schema.Types.ObjectId,
            ref:'User',
            required: true,
        },
        teamMembers:[
            {
                type: Schema.Types.ObjectId,
                ref:'User',
            },
        ],
    },
    {
        timestamps: true,
    }
);
const Project=mongoose.model('Project',projectSchema);
export default Project;