
interface UserSettingsProps {
    birthdate        : Date;
    email            : string;
    gender           : Gender;
    lastOpenFolder   : string;
    name             : string;
    role             : string;
    workingDirectory : string;
}

interface SettingsProps {    
    lastOpenFolder   : string;    
    workingDirectory : string;
}