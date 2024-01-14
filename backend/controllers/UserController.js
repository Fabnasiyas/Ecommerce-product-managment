import userModel from '../models/UserModel.js'
import bcrypt from 'bcrypt'

export const handleSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      console.log('existing user.................');
      return res.status(400).json({ message: 'Email is already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({ name, email, password: hashedPassword });
   
    await newUser.save();

    console.log('User created successfully');
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const handleSigIn=async(req,res)=>{
  console.log('.....................................');
  const { email, password } = req.body;
console.log(req.body);
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Incorrect email or password.' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Successful login
      res.status(200).json({ message: 'Successfully logged in!' });
    } else {
      // Failed login
      res.status(401).json({ message: 'Incorrect email or password.' });
    }
  } catch (error) {
    console.error('Error comparing passwords:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export const handleAddToWishList=async(req,res)=>{
  const productId = req.params.productsId;
    console.log('====================================');
  console.log(productId);
  console.log('====================================');
}