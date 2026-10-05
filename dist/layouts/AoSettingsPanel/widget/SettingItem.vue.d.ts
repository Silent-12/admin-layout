import { ComputedRef } from 'vue';
interface SettingItemConfig {
    key: string;
    label: string;
    type: 'switch' | 'input-number' | 'select';
    handler: string;
    min?: number;
    max?: number;
    step?: number;
    style?: Record<string, string>;
    controlsPosition?: '' | 'right';
    options?: Array<{
        value: any;
        label: string;
    }> | ComputedRef<Array<{
        value: any;
        label: string;
    }>>;
}
interface Props {
    config: SettingItemConfig;
    modelValue: any;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: any) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onChange?: ((value: any) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
