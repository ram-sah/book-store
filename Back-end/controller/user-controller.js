import User from "../model/user-model.js";
import bcryptjs from "bcryptjs";

// signup user
export const signup = async (req, res) => {
    try {
        const { full_name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exits" });
        }

        const hashPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            full_name,
            email,
            password: hashPassword,
        });
        await createdUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.log("Error" + error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// login user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatched = await bcryptjs.compare(password, user.password);
        if (!user || !isMatched) {
            res.status(404).json({ message: "Invalid password or user" });
        } else {
            res
                .status(200)
                .json({
                    message: "Login successful",
                    user: {
                        _id: user._id,
                        full_name: user.full_name,
                        email: user.email
                    }
                });
        }
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
