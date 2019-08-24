export class GitUsers {
    constructor(
        public name:string,
        public username:string,
        public profilepicUrl:string,
        public accountUrl:string,
        public numberRepos : string,
        public followers : number,
        public following :number,
        created_at : Date

    ){

    }
    
}
