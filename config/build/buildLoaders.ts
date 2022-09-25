import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = {
        exclude: /node_modules/,
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
            loader: 'babel-loader',
            options: {
                plugins: [
                    [
                        'i18next-extract',
                        {
                            keyAsDefaultValue: true,
                            locales: ['ru', 'en'],
                        },
                    ],
                ],
                presets: ['@babel/preset-env'],

            },
        },
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                    },
                },
            },

            // Compiles Sass to CSS
            'sass-loader',
        ],
    };

    // Если не используем TS, нужен babel-loader
    const typescriptLoader = {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader];
}
