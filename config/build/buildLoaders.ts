import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "./types/config";

/**
 * Подготовка конфигурации правил для loaders для сборки приложения
 * @param options опции сборки приложения
 * @returns конфигурация правил для Webpack
 */
export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const { mode } = options;
  const isDevModeEnabled = mode === "development";

  const babelLoader = {
    test: /\.(js|ts|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  };

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  // порядок loaders важен
  const cssLoader = {
    // регулярное выражение находит css, scss и sass-файлы
    test: /\.s?[ac]ss$/i,
    use: [
      isDevModeEnabled ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            // регулярное выражение находит module.css, module.scss и module.sass-файлы
            auto: /\.module\.s?[ac]ss$/,
            localIdentName: isDevModeEnabled
              ? "[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: "@svgr/webpack",
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/,
    use: "file-loader",
  };

  return [babelLoader, typeScriptLoader, cssLoader, svgLoader, fileLoader];
}
