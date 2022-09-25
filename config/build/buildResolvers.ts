import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        alias: {},
        extensions: ['.tsx',
            '.ts',
            '.js'],
        mainFiles: ['index'],
        modules: [options.paths.src, 'node_modules'],
        preferAbsolute: true,
    };
}
