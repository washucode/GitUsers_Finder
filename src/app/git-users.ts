export class GitUsers {
    constructor(
        public name:string,
        public login:string,
        public avatar_url:string,
        public html_url:string,
        public pulic_repos :number,
        public followers : number,
        public following :number,
        public created_at : Date

    ){

    }
    
}
