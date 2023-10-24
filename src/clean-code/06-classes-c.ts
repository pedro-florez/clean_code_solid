
import './interfaces/PersonProps';
import './interfaces/UserProps';
import './interfaces/UserSettingsProps';

(() => {
    
    //* Aplicando el principio de responsabilidad única
    //* Priorizas la composicion frente a la herencia

    class Person {

        public birthdate: Date;
        public gender:    Gender;
        public name:      string;

        constructor( { birthdate, gender, name } : PersonProps ){
            this.birthdate = birthdate;
            this.gender    = gender;
            this.name      = name;
        }
    }

    class User {

        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({ email, role } : UserComposicionProps ) {
            this.email      = email;
            this.lastAccess = new Date();
            this.role       = role;
        }

        checkCredentials() {
            return true;
        }
    }

    class Settings {

        public lastOpenFolder  : string;
        public workingDirectory: string;

        constructor( {lastOpenFolder, workingDirectory} : SettingsProps ) {
            this.lastOpenFolder   = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    // Clase para la Composicion
    class UserSettings {

        public person   : Person;
        public user     : User;
        public settings : Settings;

        constructor({            
            birthdate, gender, name,
            email, role,
            lastOpenFolder, workingDirectory,
        } : UserSettingsProps ) {            
            this.person   = new Person({ birthdate, gender, name });
            this.user     = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
        }
    }

    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'pedro.florez@test.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Pedro Florez',
        role: 'Admin',
        workingDirectory: '/usr/home'
    });

    console.log({ userSettings });

})();