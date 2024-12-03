import Student from "../Models/student.js";


export const createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json({message: "Student created successfully", data:student});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({message: "Students fetched successfully", data:students});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}