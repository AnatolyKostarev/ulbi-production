import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    getLoginUsername,
} from '../../model/selectors/getLoginUsername/getLoginUsername';
import {
    getLoginPassword,
} from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
    getLoginIsLoading,
} from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(
    ({ className }: LoginFormProps) => {
        const { t } = useTranslation();
        const dispatch = useDispatch();
        const username = useSelector(getLoginUsername);
        const password = useSelector(getLoginPassword);
        const error = useSelector(getLoginError);
        const isLoading = useSelector(getLoginIsLoading);

        const onChangeUsername = useCallback((value: string) => {
            dispatch(loginActions.setUsername(value));
        }, [dispatch]);

        const onChangePassword = useCallback((value: string) => {
            dispatch(loginActions.setPassword(value));
        }, [dispatch]);

        const onLoginClick = useCallback(() => {
            dispatch(loginByUsername({ username, password }));
        }, [dispatch, password, username]);

        return (
            // eslint-disable-next-line i18next/no-literal-string
            <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
                <div className={classNames(cls.LoginForm, {}, [className])}>
                    <Text title={t('Форма авторизации')} />
                    {error && (
                        <Text text={t('Неверный логин или пароль')} theme={TextTheme.ERROR} />
                    )}
                    <Input
                        className={cls.input}
                        type="text"
                        placeholder={t('Введите имя')}
                        autofocus
                        onChange={onChangeUsername}
                        value={username}
                    />
                    <Input
                        className={cls.input}
                        type="text"
                        placeholder={t('Введите пароль')}
                        onChange={onChangePassword}
                        value={password}
                    />
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        className={cls.loginBtn}
                        onClick={onLoginClick}
                        disabled={isLoading}
                    >
                        {t('Войти')}
                    </Button>
                </div>
            </DynamicModuleLoader>
        );
    },
);

export default LoginForm;
