class UserConfiguration implements UserConfig{
    readonly username: string;
    readonly country: string;
    readonly accounttype: number;
    readonly status: number;

    constructor(username: string, country: string, accounttype: number, status: number) {
        username = this.username;
        country = this.country;
        accounttype = this.accounttype;
        status = this.status;
    }

}
