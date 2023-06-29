import nc from "next-connect";
import User from "../../../models/User";
import db from "../../../utils/db";
import auth from "../../../middleware/auth";
const handler = nc().use(auth);

handler.post(async (req, res) => {
  try {
    db.connectDb();
    const { address } = req.body;
    const user = await User.findById(req.user);

    await user.updateOne(
      {
        $push: {
          address: address,
        },
      }
    );

    // Busque o usuário atualizado no banco de dados
    const updatedUser = await User.findById(req.user);
    db.disconnectDb();

    // Retorne os endereços do usuário atualizado
    return res.json({ addresses: updatedUser.address });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});


export default handler;
