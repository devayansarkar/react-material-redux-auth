export default interface IBasePageProps {
    history: any,
    match: IMatchPageProps
}

interface IMatchPageProps {
    isExact: boolean,
    params: any,
    path: string,
    url: string
}