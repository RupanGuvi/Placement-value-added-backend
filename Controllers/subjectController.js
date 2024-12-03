import Subject from "../Models/subject.js";

export const createSubject = async (req, res) => {
    try {
        const subject = new Subject(req.body);
        await subject.save();
        res.status(201).json({ message: "Subject created successfully", data: subject });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.status(200).json({ message: "Subjects fetched successfully", data: subjects });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}