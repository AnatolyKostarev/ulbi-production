import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugin } from './buildPlugin';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
    options: BuildOptions,
): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined,
        entry: paths.entry,
        mode,
        module: {
            rules: buildLoaders(options),
        },
        output: {
            clean: true,
            filename: '[name].[contenthash].js',
            path: paths.build,
        },

        plugins: buildPlugin(options),

        resolve: buildResolvers(options),
    };
}
