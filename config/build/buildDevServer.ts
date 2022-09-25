import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        historyApiFallback: true,
        hot: true,
        open: true,
        port: options.port,
    };
}
