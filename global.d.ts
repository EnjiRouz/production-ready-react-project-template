declare module '*.module.css' {
    type IClassNames = Record<string, string>;

    const classNames: IClassNames;
    export = classNames;
}

declare module '*.module.scss' {
    type IClassNames = Record<string, string>;

    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.png';

declare module '*.jpg';

declare module '*.jpeg';

declare const BUILD_MODE: 'production' | 'development';
