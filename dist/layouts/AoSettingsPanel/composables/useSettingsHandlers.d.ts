/**
 * 设置项通用处理逻辑
 */
export declare function useSettingsHandlers(): {
    domOperations: {
        setBodyClass: (className: string, add: boolean) => void;
    };
    basicHandlers: {
        workTab: () => void;
        uniqueOpened: () => void;
        menuButton: () => void;
        fastEnter: () => void;
        language: () => void;
        notification: () => void;
    };
    colorHandlers: {
        selectColor: (theme: string) => void;
    };
    createToggleHandler: (storeMethod: () => void, callback?: () => void) => () => void;
};
