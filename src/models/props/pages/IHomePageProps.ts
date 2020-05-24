import IBasePageProps from './IBasePageProps'
import IUserState from '../../auth/IUserState';
export default interface IHomePageProps extends IBasePageProps {
    authentication: IUserState,
    session: () => void
}