import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './SideBarItem.module.scss';
import { SideBarItemType } from '../../model/items';

interface SideBarItemProps {
    item: SideBarItemType;
    collapsed: boolean;
}
const SideBarItem = memo(({ item, collapsed}: SideBarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});

export default SideBarItem;
