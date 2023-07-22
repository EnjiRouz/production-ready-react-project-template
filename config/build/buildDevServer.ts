import { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

/**
 * Подготовка конфигурации для сборки dev-server
 * @param options опции сборки приложения
 * @returns конфигурация для сборки dev-server
 */
export function buildDevServer(options: BuildOptions): Configuration {
    const { port } = options;

    return {
        port,
        open: true,
    }
}