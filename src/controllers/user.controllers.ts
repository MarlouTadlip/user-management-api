import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

const userRepository = AppDataSource.getRepository(User);
const deleteUser = (req: Request, res: Response) => { 
    
    userRepository.delete(req.params.id)
}

export default deleteUser;
