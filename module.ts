export function importModule(module:string):any {
    const Module = require(module)
    return Module;
}
