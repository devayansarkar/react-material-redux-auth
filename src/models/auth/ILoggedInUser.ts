export default interface ILoggedInUser {
    displayName?: string | null,
    email: string | null,
    uuid: string,
    profilePic?: string | null
}