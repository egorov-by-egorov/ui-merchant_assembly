const isProduction = process.env.NODE_ENV === 'production';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsConfigPaths = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
	mode: isProduction ? 'production' : 'development',
	entry: './src/index.tsx',
	output: {
		filename: '[fullhash].bundle.js',
		path: path.resolve(__dirname, 'build'),
		assetModuleFilename: 'assets/[fullhash][ext]',
		clean: true,
	},
	devtool: 'inline-source-map',
	devServer: {
		port: 9000,
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		plugins: [new TsConfigPaths()],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[fullhash].bundle.css',
		}),
		new HtmlWebpackPlugin({
			title: 'New LK',
			template: path.join(__dirname, 'public', 'index.html'),
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'public'),
					to: path.resolve(__dirname, 'build'),
					globOptions: {
						ignore: [`${path.resolve(__dirname, 'public')}/index.html`],
					},
				},
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
				},
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [['postcss-preset-env']],
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				type: 'asset/resource',
			},
		],
	},
};
