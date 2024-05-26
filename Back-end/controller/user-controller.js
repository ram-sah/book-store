import User from "../model/user-model.js";

export const signup =async (req, res) => {
    try {
        const { full_name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exits" });
        }
        const createdUser = new User({
            full_name,
            email,
            password,
        });
       await createdUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.log("Error" + error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
