import IBasePageProps from './IBasePageProps'
import IUserState from '../../auth/IUserState';
export default interface ILoginPageProps extends IBasePageProps {
    authentication: IUserState,
    login: (email: string, password: string, remember: boolean) => void
}