import { Repository, EntityRepository } from "typeorm";
import { Setting } from "../entities/Settings";


//Extendo os métodos do Repository pra essa classe
@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {}

export { SettingsRepository };